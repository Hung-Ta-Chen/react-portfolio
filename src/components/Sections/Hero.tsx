import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, role, summary, actions} = heroData;
  return (
    <section className="pb-12 pt-16 sm:pb-16 sm:pt-24" id={SectionId.Hero}>
      <p className="text-sm font-medium text-indigo-600">{role}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">{name}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">{summary}</p>
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-4">
        {actions.map(({href, text, primary}) => (
          <a
            className={classNames(
              'inline-flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2',
              primary
                ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                : 'border border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100',
            )}
            href={href}
            key={text}>
            {text}
            {primary && <ArrowDownTrayIcon className="h-4 w-4" />}
          </a>
        ))}
        <div className="flex items-center gap-x-1">
          <Socials />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
