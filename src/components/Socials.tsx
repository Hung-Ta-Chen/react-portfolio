import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => (
  <>
    {socialLinks.map(({label, Icon, href}) => (
      <a
        aria-label={label}
        className="rounded-full p-2 text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        href={href}
        key={label}
        rel="noopener noreferrer"
        target="_blank">
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </>
));

Socials.displayName = 'Socials';
export default Socials;
