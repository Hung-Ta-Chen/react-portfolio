import crypto from 'crypto';
import type {NextApiRequest} from 'next';


export type Geo = {
  country?: string; city?: string; subdivision?: string;
  postal_code?: string; timezone?: string; latitude?: number; longitude?: number;
};


export function badEmail(e: string): boolean {
  return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || e.length > 120;
}

export function anonIp(ip: string): string {
  const p = ip.split('.')
  return p.length === 4 ? `${p[0]}.${p[1]}.${p[2]}.0` : ip;
}

export function shortFp(ip: string, ua: string): string {
  return crypto.createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 12);
}

export function parseUserAgent(req: NextApiRequest): string {
  return (req.headers['user-agent'] as string) || 'unknown';
}

export function parseIP(req: NextApiRequest): string {
  return (req.headers['x-nf-client-connection-ip'] as string)?.trim() ||
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';
}

export function parseGeo(req: NextApiRequest): Geo | undefined {
  const raw = req.headers['x-nf-geo'] as string | string[] | undefined;
  const str = Array.isArray(raw) ? raw[0] : raw;
  if (typeof str !== 'string') return undefined;

  try {
    // Netlify’s x-nf-geo header is a base64-encoded JSON blob
    const json = JSON.parse(Buffer.from(str, 'base64').toString('utf8'));
    return {
      city: json.city,
      country: json.country?.name ?? json.country?.code,
      subdivision: json.subdivision?.name ?? json.subdivision?.code,
      postal_code: json.postal_code,
      timezone: json.timezone,
      latitude: json.latitude,
      longitude: json.longitude,
    };
  } catch {
    return undefined;
  }
}