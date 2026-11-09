import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import profilePic from '../../images/profilepic.jpg';
import Contours from '../Contours';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, role, summary, actions} = heroData;
  return (
    <section className="grid items-center overflow-x-clip gap-x-8 gap-y-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-24" id={SectionId.Hero}>
      <div>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">{name}</h1>
        <p className="mt-4 font-display text-xl font-medium text-ink-soft">{role}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{summary}</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-4">
          {actions.map(({href, text, primary, disabled}) =>
            disabled ? (
              <button
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-x-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink-soft/60"
                disabled
                key={text}
                title="Coming soon"
                type="button">
                {text}
                <ArrowDownTrayIcon className="h-4 w-4" />
              </button>
            ) : (
              <a
                className={
                  primary
                    ? 'inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
                    : 'inline-flex items-center rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                }
                href={href}
                key={text}>
                {text}
              </a>
            ),
          )}
          <div className="flex items-center gap-x-1">
            <Socials />
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <Contours className="pointer-events-none absolute -inset-[22%] h-[144%] w-[144%] lg:[-webkit-mask-image:linear-gradient(to_right,#000_70%,transparent_85%)] lg:[mask-image:linear-gradient(to_right,#000_70%,transparent_85%)]" />
        <div className="relative mx-auto aspect-[4/5] w-[68%]">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-gold sm:translate-x-4 sm:translate-y-4" />
          <Image
            alt="Portrait of Hung-Ta Chen"
            className="relative h-full w-full rounded-[2rem] object-cover object-[28%_30%] shadow-xl shadow-ink/10"
            placeholder="blur"
            priority
            sizes="(min-width: 1024px) 24rem, 70vw"
            src={profilePic}
          />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
