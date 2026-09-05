'use client';

import { useState } from 'react';
import type { CareerJobUpload, CareerQuestion } from '@/lib/crm';

const EXT_TO_MIME: Record<string, string> = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  doc: 'application/msword',
  txt: 'text/plain',
};

const fieldClass =
  'mt-2 w-full rounded-xl border border-black/[.12] bg-white px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

function resolveContentType(file: File, allowed: string[]): string | null {
  if (file.type && allowed.includes(file.type)) return file.type;
  const ext = file.name.split('.').pop()?.toLowerCase();
  const guessed = ext ? EXT_TO_MIME[ext] : undefined;
  if (guessed && allowed.includes(guessed)) return guessed;
  return null;
}

async function uploadCareerFile(slug: string, file: File, maxBytes: number, mimeTypes: string[]): Promise<string> {
  if (file.size > maxBytes) {
    throw new Error(`File must be ${Math.round(maxBytes / (1024 * 1024))} MB or smaller`);
  }
  const contentType = resolveContentType(file, mimeTypes);
  if (!contentType) {
    throw new Error('Use a PDF, Word document, or text file');
  }

  const metaRes = await fetch(`/api/careers/upload?slug=${encodeURIComponent(slug)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contentType,
      size: file.size,
      filename: file.name,
    }),
  });
  const meta = (await metaRes.json()) as { error?: string; signedUrl?: string; path?: string };
  if (!metaRes.ok || !meta.signedUrl || !meta.path) {
    throw new Error(meta.error || 'Could not start the file upload');
  }

  const put = await fetch(meta.signedUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: file,
  });
  if (!put.ok) {
    throw new Error('Could not upload the file');
  }
  return meta.path;
}

function errorMessage(data: { error?: string }, fallback: string) {
  return typeof data.error === 'string' && data.error ? data.error : fallback;
}

export function CareerApplyForm({
  slug,
  title,
  questions: rawQuestions,
  upload,
}: {
  slug: string;
  title: string;
  questions: CareerQuestion[];
  upload: CareerJobUpload;
}) {
  const questions = [...rawQuestions].sort((a, b) => a.sortOrder - b.sortOrder);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'duplicate'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get('website') ?? '').trim()) {
      setStatus('success');
      return;
    }

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').replace(/\D/g, '');
    const email = String(data.get('email') ?? '').trim().toLowerCase();
    const city = String(data.get('city') ?? '').trim();

    if (name.length < 2 || name.length > 120) {
      setError('Enter your full name');
      return;
    }
    if (phone.length < 10) {
      setError('Enter a valid 10-digit phone number');
      return;
    }

    setStatus('submitting');

    try {
      const resumeFile = data.get('resume');
      let resumeUrl: string | undefined;
      if (resumeFile instanceof File && resumeFile.size > 0) {
        resumeUrl = await uploadCareerFile(slug, resumeFile, upload.maxBytes, upload.mimeTypes);
      }

      const answers: { questionId: string; value: string | number }[] = [];
      for (const question of questions) {
        if (question.type === 'FILE') {
          const file = data.get(`question-${question.id}`);
          if (file instanceof File && file.size > 0) {
            const path = await uploadCareerFile(slug, file, upload.maxBytes, upload.mimeTypes);
            answers.push({ questionId: question.id, value: path });
          } else if (question.isRequired) {
            throw new Error(`Please attach a file for “${question.label}”`);
          }
          continue;
        }

        const raw = String(data.get(`question-${question.id}`) ?? '').trim();
        if (!raw) {
          if (question.isRequired) {
            throw new Error(`Please answer “${question.label}”`);
          }
          continue;
        }
        answers.push({
          questionId: question.id,
          value: question.type === 'NUMBER' ? Number(raw) : raw,
        });
      }

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          name,
          phone,
          email,
          city: city || undefined,
          resumeUrl,
          website: '',
          answers,
        }),
      });
      const result = (await res.json()) as { error?: string; success?: boolean };

      if (res.status === 409) {
        setStatus('duplicate');
        return;
      }
      if (!res.ok) {
        throw new Error(errorMessage(result, 'Could not submit your application'));
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('idle');
      setError(err instanceof Error ? err.message : 'Could not submit your application');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-emerald-700">Application received</p>
        <h2 className="display-font mt-3 text-2xl font-bold">Thank you. We have your application.</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          If this role is a match, the hiring team will contact you on the phone or email you shared.
        </p>
      </div>
    );
  }

  if (status === 'duplicate') {
    return (
      <div className="rounded-[1.5rem] border border-primary/20 bg-primary/[.06] p-6 sm:p-8">
        <h2 className="display-font text-2xl font-bold">You already applied for this role</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          We already have an application from you for {title}. There is nothing else to send for this opening.
        </p>
      </div>
    );
  }

  const accept = [...upload.mimeTypes, '.pdf', '.doc', '.docx', '.txt'].join(',');
  const maxMb = Math.round(upload.maxBytes / (1024 * 1024));

  return (
    <form onSubmit={onSubmit} className="relative rounded-[1.75rem] border border-black/[.07] bg-white p-6 shadow-sm sm:p-8" noValidate>
      <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Apply</p>
      <h2 className="display-font mt-2 text-3xl font-bold">Send your application</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Resume files up to {maxMb} MB. PDF or Word preferred.</p>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`website-${slug}`}>Website</label>
        <input id={`website-${slug}`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Full name
          <input className={fieldClass} name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input className={fieldClass} name="phone" type="tel" required inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input className={fieldClass} name="email" type="email" required autoComplete="email" />
        </label>
        <label className="block text-sm font-semibold">
          City <span className="font-normal text-muted-foreground">(optional)</span>
          <input className={fieldClass} name="city" type="text" autoComplete="address-level2" />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold">
        Resume
        <input
          className={`${fieldClass} file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-primary`}
          name="resume"
          type="file"
          accept={accept}
        />
      </label>

      {questions.map((question) => (
        <QuestionField key={question.id} question={question} accept={accept} />
      ))}

      {error ? <p className="mt-5 text-sm font-medium text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 font-bold text-white transition hover:bg-brand-deep disabled:opacity-60"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}

function QuestionField({ question, accept }: { question: CareerQuestion; accept: string }) {
  const name = `question-${question.id}`;
  const requiredMark = question.isRequired ? '' : <span className="font-normal text-muted-foreground"> (optional)</span>;

  if (question.type === 'YES_NO') {
    return (
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">
          {question.label}
          {requiredMark}
        </legend>
        <div className="mt-3 flex gap-6">
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="radio" name={name} value="yes" required={question.isRequired} className="size-4 accent-primary" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="radio" name={name} value="no" required={question.isRequired} className="size-4 accent-primary" />
            No
          </label>
        </div>
      </fieldset>
    );
  }

  if (question.type === 'SELECT') {
    return (
      <label className="mt-5 block text-sm font-semibold">
        {question.label}
        {requiredMark}
        <select className={fieldClass} name={name} required={question.isRequired} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (question.type === 'TEXTAREA') {
    return (
      <label className="mt-5 block text-sm font-semibold">
        {question.label}
        {requiredMark}
        <textarea className={`${fieldClass} min-h-28`} name={name} required={question.isRequired} rows={4} />
      </label>
    );
  }

  if (question.type === 'NUMBER') {
    return (
      <label className="mt-5 block text-sm font-semibold">
        {question.label}
        {requiredMark}
        <input className={fieldClass} name={name} type="number" required={question.isRequired} />
      </label>
    );
  }

  if (question.type === 'FILE') {
    return (
      <label className="mt-5 block text-sm font-semibold">
        {question.label}
        {requiredMark}
        <input
          className={`${fieldClass} file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-primary`}
          name={name}
          type="file"
          accept={accept}
          required={question.isRequired}
        />
      </label>
    );
  }

  return (
    <label className="mt-5 block text-sm font-semibold">
      {question.label}
      {requiredMark}
      <input className={fieldClass} name={name} type="text" required={question.isRequired} />
    </label>
  );
}
