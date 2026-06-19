export function parseLinkedInUrl(input: string): string | null {
  const t = input.trim();
  if (!t) return null;
  let url: URL;
  try {
    url = new URL(t.startsWith('http') ? t : `https://${t}`);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '').toLowerCase();
  if (host !== 'linkedin.com' && !host.endsWith('.linkedin.com')) {
    return null;
  }
  return url.href;
}
