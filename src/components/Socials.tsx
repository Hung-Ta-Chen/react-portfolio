import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => (
  <>
    {socialLinks.map(({label, Icon, href}) => (
      <a
        aria-label={label}
        className="rounded-md p-1.5 text-zinc-500 transition-colors hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
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
