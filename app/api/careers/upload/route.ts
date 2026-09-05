import { crmProxyHeaders, getCrmUrl, proxyCrmJson } from '@/lib/crm';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

export async function POST(request: Request) {
  const crmUrl = getCrmUrl();
  if (!crmUrl) {
    return Response.json({ error: 'Careers service is not configured' }, { status: 503 });
  }

  const slug = new URL(request.url).searchParams.get('slug')?.trim() ?? '';
  if (!slug || !slugPattern.test(slug)) {
    return Response.json({ error: 'A valid job is required' }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  return proxyCrmJson(`${crmUrl}/api/public/careers/jobs/${encodeURIComponent(slug)}/upload`, {
    method: 'POST',
    headers: crmProxyHeaders(request),
    body: JSON.stringify(body),
  });
}
