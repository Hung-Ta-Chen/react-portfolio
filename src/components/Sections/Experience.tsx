import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const bulletList = 'list-disc space-y-2.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft marker:text-gold';

const Experience: FC = memo(() => (
  <Section sectionId={SectionId.Experience} title="Experience">
    <ol>
      {experience.map(({company, title, date, location, bullets, groups, tags}) => (
        <li className="grid gap-x-10 sm:grid-cols-[10.5rem_1fr]" key={`${company}-${date}`}>
          <div className="pb-3 text-sm text-ink-soft sm:pb-0 sm:pt-1 sm:text-right">
            <p className="font-medium text-ink">{date}</p>
            <p>{location}</p>
          </div>
          <div className="relative border-l border-ink/15 pb-14 pl-7 [li:last-child>&]:pb-0 sm:pl-9">
            <span className="absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 border-gold bg-paper" />
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{company}</h3>
            <p className="mt-0.5 text-[0.9375rem] text-ink-soft">{title}</p>
            {bullets.length > 0 && <ul className={`mt-4 ${bulletList}`}>{bullets.map(b => <li key={b}>{b}</li>)}</ul>}
            {groups?.map(group => (
              <div className="mt-6" key={group.heading}>
                <h4 className="font-display text-lg font-semibold text-ink">{group.heading}</h4>
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
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs text-ink-soft" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
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
