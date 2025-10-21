import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import StatusCode from 'status-code-enum';

import type {Geo} from '../../lib/network';
import {
  badEmail,
  parseGeo,
  parseIP,
  parseUserAgent,
  shortFp
} from '../../lib/network';

interface EmailResponse {
  success: boolean;
  message: string;
}

const redis: Redis = Redis.fromEnv();
const ratelimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, '1 m'),  // 1 request per minute
  prefix: 'contact', // For finding key in redis
});

const VISIT_LIST_KEY = 'contact:visitors'  
const VISIT_LIST_KEEP = 1000                 // Keep last 500 entries

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(StatusCode.ClientErrorMethodNotAllowed).json({success: false, message: 'Method Not Allowed'});
  }

  // Parse headers from the request
  const ip = parseIP(req);
  const ua = parseUserAgent(req);
  const geo: Geo | undefined = parseGeo(req);

  // Set up rate limit with Redis
  const key = `${ip}:${ua}`;
  const {success, limit, remaining, reset} = await ratelimiter.limit(key);
  res.setHeader('X-RateLimit-Limit', String(limit));
  res.setHeader('X-RateLimit-Remaining', String(remaining));
  res.setHeader('X-RateLimit-Reset', String(reset));
  if (!success) return res.status(StatusCode.ClientErrorTooManyRequests).json({success: false, message: 'Too many requests'});

  const name: string = (req.body?.name ?? '').toString().trim();
  const email: string = (req.body?.email ?? '').toString().trim();
  const message: string = (req.body?.message ?? '').toString().trim();
  if (!name || name.length > 80) 
    return res.status(StatusCode.ClientErrorBadRequest).json({success: false, message: 'Bad name'});
  if (!email || badEmail(email)) return res.status(StatusCode.ClientErrorBadRequest).json({success: false, message: 'Bad email'});
  if (!message || message.length === 0)
    return res.status(StatusCode.ClientErrorBadRequest).json({success: false, message: 'Bad message'});

  const record = {
    timestamp: Date.now(),
    ip: ip,
    fp: shortFp(ip, ua),
    ua,
    geo: geo ? geo : req.headers['x-nf-geo'] as string,
    from: email,
    name,
  }
  
  // Store the latest VISIT_LIST_KEEP records
  await redis.lpush(VISIT_LIST_KEY, JSON.stringify(record))
  await redis.ltrim(VISIT_LIST_KEY, 0, VISIT_LIST_KEEP - 1)

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS},
    })
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'hungtachen0121@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`,
    })
    return res.status(StatusCode.SuccessOK).json({success: true, message: 'Email sent successfully!'})
  } catch (e) {
    console.error('Email error', e)
    return res.status(StatusCode.ServerErrorInternal).json({success: false, message: 'Failed to send email'})
  }
}