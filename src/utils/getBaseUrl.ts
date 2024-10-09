import { NextApiRequest } from 'next';

export function getBaseUrl(req?: NextApiRequest): string {
  if (req) {
    // Server-side
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const { host } = req.headers;
    return `${protocol}://${host}`;
  }
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin;
  }
  return '';
}
