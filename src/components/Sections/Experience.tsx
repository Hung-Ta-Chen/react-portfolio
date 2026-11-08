import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Experience: FC = memo(() => (
  <Section sectionId={SectionId.Experience} title="Experience">
    <ol className="space-y-10">
      {experience.map(({company, title, date, location, bullets, groups, tags}) => (
        <li className="grid gap-x-8 gap-y-2 sm:grid-cols-[10rem_1fr]" key={`${company}-${date}`}>
          <div className="text-sm text-zinc-500">
            <p>{date}</p>
            <p>{location}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-900">{company}</h3>
            <p className="text-sm text-zinc-600">{title}</p>
            {bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-400">
                {bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {groups?.map(group => (
              <div className="mt-4" key={group.heading}>
                <h4 className="text-sm font-semibold text-zinc-900">{group.heading}</h4>
                {group.summary && <p className="mt-1 text-sm leading-relaxed text-zinc-600">{group.summary}</p>}
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-zinc-400">
                  {group.bullets.map(({label, text}) => (
                    <li key={text}>
                      {label && <span className="font-medium text-zinc-800">{label}: </span>}
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>

    <h3 className="mb-6 mt-14 text-sm font-semibold uppercase tracking-widest text-indigo-600">Education</h3>
    <ul className="space-y-6">
      {education.map(({school, degree, date, location}) => (
        <li className="grid gap-x-8 gap-y-1 sm:grid-cols-[10rem_1fr]" key={school}>
          <div className="text-sm text-zinc-500">
            <p>{date}</p>
            <p>{location}</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-zinc-900">{school}</h4>
            <p className="text-sm text-zinc-600">{degree}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
));

Experience.displayName = 'Experience';
export default Experience;
