import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import ContourBanner from '../ContourBanner';
import CountUp from '../CountUp';
import Section from '../Layout/Section';
import Reveal from '../Reveal';

const bulletList = 'list-disc space-y-2.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft marker:text-gold';

const Experience: FC = memo(() => (
  <Section sectionId={SectionId.Experience} title="Experience">
    <ol className="space-y-8">
      {experience.map(({company, image, stats, url, note, title, date, location, bullets, groups, tags}, index) => (
        <li key={`${company}-${date}`}>
          <Reveal>
            <article className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
              <div className="relative h-28 overflow-hidden bg-ink sm:h-36">
                {image ? (
                  <Image alt="" className="object-cover" fill sizes="(min-width: 768px) 768px, 100vw" src={image} />
                ) : (
                  <ContourBanner className="absolute inset-0 h-full w-full" variant={index} />
                )}
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 p-4 sm:p-6">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">{date}</span>
                  <span className="text-xs text-white/75">{location}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {url ? (
                    <a
                      className="group inline-flex items-center gap-x-1 rounded-md underline decoration-gold decoration-2 underline-offset-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank">
                      {company}
                      <ArrowUpRightIcon className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    company
                  )}
                  {note && <span className="font-sans text-sm font-normal tracking-normal text-ink-soft">{note}</span>}
                </h3>
                <p className="mt-1 text-[0.9375rem] text-ink-soft">{title}</p>

                {stats && (
                  <dl className="mt-6 grid grid-cols-3 gap-3">
                    {stats.map(stat => (
                      <div className="rounded-xl bg-paper px-2 py-3 text-center sm:px-4 sm:py-4" key={stat.label}>
                        <dt className="sr-only">{stat.label}</dt>
                        <dd className="font-display text-2xl font-bold text-gold-deep sm:text-3xl">
                          <CountUp prefix={stat.prefix} suffix={stat.suffix} value={stat.value} />
                        </dd>
                        <p aria-hidden className="mt-1 text-xs leading-snug text-ink-soft">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </dl>
                )}

                {bullets.length > 0 && <ul className={`mt-5 ${bulletList}`}>{bullets.map(b => <li key={b}>{b}</li>)}</ul>}

                {groups?.map(group => (
                  <div className="mt-5 rounded-xl bg-paper p-5 sm:p-6" key={group.heading}>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h4 className="font-display text-lg font-semibold text-ink">{group.heading}</h4>
                      {group.link && (
                        <a
                          className="group inline-flex items-center gap-x-1 rounded-md text-sm text-ink underline decoration-gold decoration-2 underline-offset-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                          href={group.link.href}
                          rel="noopener noreferrer"
                          target="_blank">
                          {group.link.text}
                          <ArrowUpRightIcon className="h-3.5 w-3.5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                    {group.summary && (
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{group.summary}</p>
                    )}
                    <ul className={`mt-3 ${bulletList}`}>
                      {group.bullets.map(({label, text}) => (
                        <li key={text}>
                          {label && <span className="font-semibold text-ink">{label}: </span>}
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs text-ink-soft" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>

    <h3 className="mb-8 mt-16 font-display text-2xl font-bold tracking-tight text-ink">Education</h3>
    <ul className="space-y-7">
      {education.map(({school, degree, date, location}) => (
        <li className="grid gap-x-10 gap-y-1 sm:grid-cols-[10.5rem_1fr]" key={school}>
          <div className="text-sm text-ink-soft sm:text-right">
            <p className="font-medium text-ink">{date}</p>
            <p>{location}</p>
          </div>
          <div className="sm:pl-[2.3rem]">
            <h4 className="font-display text-lg font-semibold text-ink">{school}</h4>
            <p className="text-[0.9375rem] text-ink-soft">{degree}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
));

Experience.displayName = 'Experience';
export default Experience;
