import { crmProxyHeaders, getCrmUrl, proxyCrmJson } from '@/lib/crm';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

type ApplyProxyBody = {
  slug?: unknown;
  [key: string]: unknown;
};

export async function POST(request: Request) {
  const crmUrl = getCrmUrl();
  if (!crmUrl) {
    return Response.json({ error: 'Careers service is not configured' }, { status: 503 });
  }

  let payload: ApplyProxyBody;
  try {
    payload = (await request.json()) as ApplyProxyBody;
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const slug = typeof payload.slug === 'string' ? payload.slug.trim() : '';
  if (!slug || !slugPattern.test(slug)) {
    return Response.json({ error: 'A valid job is required' }, { status: 400 });
  }

  const body = { ...payload };
  delete body.slug;

  return proxyCrmJson(`${crmUrl}/api/public/careers/jobs/${encodeURIComponent(slug)}/apply`, {
    method: 'POST',
    headers: crmProxyHeaders(request),
    body: JSON.stringify(body),
  });
}
