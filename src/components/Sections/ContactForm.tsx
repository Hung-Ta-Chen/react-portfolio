import {FC, FormEvent, memo, useCallback, useState} from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'rate-limited' | 'error';

const field =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40';

const ContactForm: FC<{email: string}> = memo(({email}) => {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (response.status === 429) {
        setStatus('rate-limited');
        return;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <form className="grid gap-y-4" method="POST" onSubmit={onSubmit}>
      <label className="grid gap-y-1.5 text-sm font-medium text-ink">
        Name
        <input autoComplete="name" className={field} maxLength={80} name="name" required type="text" />
      </label>
      <label className="grid gap-y-1.5 text-sm font-medium text-ink">
        Email
        <input autoComplete="email" className={field} name="email" required type="email" />
      </label>
      <label className="grid gap-y-1.5 text-sm font-medium text-ink">
        Message
        <textarea className={field} maxLength={250} name="message" required rows={5} />
      </label>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <button
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60"
          disabled={status === 'sending'}
          type="submit">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p aria-live="polite" className="text-sm text-ink-soft">
          {status === 'sent' && 'Message sent. I’ll reply by email.'}
          {status === 'rate-limited' && 'You sent a message a moment ago. Try again in a minute.'}
          {status === 'error' && `The message didn’t send. Email me at ${email} instead.`}
        </p>
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
