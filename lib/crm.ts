const CRM_REVALIDATE_SECONDS = 60;

export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
export type Department =
  | 'OPERATIONS'
  | 'SALES_TEAM'
  | 'MARKETING_TEAM'
  | 'CUSTOMER_SUPPORT'
  | 'TECHNICAL'
  | 'MANAGEMENT';
export type TargetRole = 'CALLER' | 'SALES' | 'MARKETING' | 'SUPPORT' | 'DEVELOPER' | 'TRAINEE';
export type QuestionType = 'TEXT' | 'TEXTAREA' | 'SELECT' | 'YES_NO' | 'NUMBER' | 'FILE';

export type CareerJobListItem = {
  slug: string;
  title: string;
  department: Department | null;
  targetRole: TargetRole | null;
  employmentType: EmploymentType;
  location: string | null;
  closesAt: string | null;
  updatedAt: string;
};

export type CareerQuestion = {
  id: string;
  label: string;
  type: QuestionType;
  options: string[];
  isRequired: boolean;
  sortOrder: number;
};

export type CareerJobUpload = {
  url: string;
  bucket: string;
  maxBytes: number;
  mimeTypes: string[];
};

export type CareerJob = CareerJobListItem & {
  description: string;
  questions: CareerQuestion[];
  upload: CareerJobUpload;
};

export function getCrmUrl(): string | null {
  const url = process.env.CRM_URL?.trim().replace(/\/$/, '');
  return url || null;
}

export function employmentTypeLabel(type: EmploymentType): string {
  switch (type) {
    case 'FULL_TIME':
      return 'Full-time';
    case 'PART_TIME':
      return 'Part-time';
    case 'CONTRACT':
      return 'Contract';
    case 'INTERNSHIP':
      return 'Internship';
  }
}

export function departmentLabel(department: Department | null): string | null {
  if (!department) return null;
  switch (department) {
    case 'OPERATIONS':
      return 'Operations';
    case 'SALES_TEAM':
      return 'Sales';
    case 'MARKETING_TEAM':
      return 'Marketing';
    case 'CUSTOMER_SUPPORT':
      return 'Customer support';
    case 'TECHNICAL':
      return 'Technical';
    case 'MANAGEMENT':
      return 'Management';
  }
}

export async function fetchPublishedJobs(): Promise<CareerJobListItem[]> {
  const crmUrl = getCrmUrl();
  if (!crmUrl) return [];

  try {
    const res = await fetch(`${crmUrl}/api/public/careers/jobs`, {
      next: { revalidate: CRM_REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { jobs?: CareerJobListItem[] };
    return Array.isArray(data.jobs) ? data.jobs : [];
  } catch {
    return [];
  }
}

export async function fetchPublishedJob(slug: string): Promise<CareerJob | null> {
  const crmUrl = getCrmUrl();
  if (!crmUrl) return null;

  try {
    const res = await fetch(`${crmUrl}/api/public/careers/jobs/${encodeURIComponent(slug)}`, {
      next: { revalidate: CRM_REVALIDATE_SECONDS },
    });
    if (res.status === 404 || !res.ok) return null;
    const data = (await res.json()) as { job?: CareerJob };
    return data.job ?? null;
  } catch {
    return null;
  }
}

export function crmProxyHeaders(request: Request): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  const secret = process.env.CAREERS_INGEST_SECRET?.trim();
  if (secret) {
    headers.Authorization = `Bearer ${secret}`;
  }
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  if (forwarded) headers['x-forwarded-for'] = forwarded;
  else if (realIp) headers['x-forwarded-for'] = realIp;
  return headers;
}

export async function proxyCrmJson(url: string, init: RequestInit): Promise<Response> {
  try {
    const res = await fetch(url, init);
    const text = await res.text();
    let data: unknown = { error: 'Careers service returned an unexpected response' };
    if (text) {
      try {
        data = JSON.parse(text) as unknown;
      } catch {
        data = { error: 'Careers service returned an unexpected response' };
      }
    }
    return Response.json(data, { status: res.status });
  } catch {
    return Response.json({ error: 'Could not reach the careers service' }, { status: 502 });
  }
}
