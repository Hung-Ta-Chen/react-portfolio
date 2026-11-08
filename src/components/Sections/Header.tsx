import {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const links: {id: SectionId; label: string}[] = [
  {id: SectionId.Experience, label: 'Experience'},
  {id: SectionId.Projects, label: 'Projects'},
  {id: SectionId.Skills, label: 'Skills'},
  {id: SectionId.Contact, label: 'Contact'},
];

const Header: FC = memo(() => (
  <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
    <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
      <a
        className="whitespace-nowrap rounded-md text-sm font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
        href={`#${SectionId.Hero}`}>
        Hung-Ta Chen
      </a>
      <nav aria-label="Primary" className="flex gap-x-3 text-sm sm:gap-x-6">
        {links.map(({id, label}) => (
          <a
            className="rounded-md text-zinc-600 transition-colors hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
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
