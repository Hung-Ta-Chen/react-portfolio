import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import TimelineEntry from '../TimelineEntry';

const bulletList = 'list-disc space-y-2.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft marker:text-gold';

const Experience: FC = memo(() => (
  <Section sectionId={SectionId.Experience} title="Experience">
    <ol>
      {experience.map(({company, url, note, title, date, location, bullets, groups, tags}) => (
        <TimelineEntry date={date} key={`${company}-${date}`} location={location}>
          <h3 className="flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-bold tracking-tight text-ink">
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
          <p className="mt-0.5 text-[0.9375rem] text-ink-soft">{title}</p>
          {bullets.length > 0 && <ul className={`mt-4 ${bulletList}`}>{bullets.map(b => <li key={b}>{b}</li>)}</ul>}
          {groups?.map(group => (
            <div className="mt-6" key={group.heading}>
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
              {group.summary && <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{group.summary}</p>}
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
            <div className="tl-tags mt-6 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs text-ink-soft" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </TimelineEntry>
      ))}
    </ol>

    <h3 className="mb-8 mt-16 font-display text-2xl font-bold tracking-tight text-ink">Education</h3>
    <ul>
      {education.map(({school, degree, date, location}) => (
        <TimelineEntry compact date={date} key={school} location={location} moving={false}>
          <h4 className="font-display text-lg font-semibold text-ink">{school}</h4>
          <p className="text-[0.9375rem] text-ink-soft">{degree}</p>
        </TimelineEntry>
      ))}
    </ul>
  </Section>
));

Experience.displayName = 'Experience';
export default Experience;
