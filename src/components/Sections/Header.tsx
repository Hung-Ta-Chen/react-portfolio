import {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const links: {id: SectionId; label: string}[] = [
  {id: SectionId.Experience, label: 'Experience'},
  {id: SectionId.Projects, label: 'Projects'},
  {id: SectionId.Skills, label: 'Skills'},
  {id: SectionId.Contact, label: 'Contact'},
];

const Header: FC = memo(() => (
  <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
      <a
        className="whitespace-nowrap rounded-md font-display text-base font-bold tracking-tight text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        href={`#${SectionId.Hero}`}>
        Hung-Ta Chen
      </a>
      <nav aria-label="Primary" className="flex gap-x-3 text-sm sm:gap-x-7">
        {links.map(({id, label}) => (
          <a
            className="rounded-md text-ink-soft underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            href={`#${id}`}
            key={id}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
));

Header.displayName = 'Header';
export default Header;
