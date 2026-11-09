import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';

const Skills: FC = memo(() => (
  <Section sectionId={SectionId.Skills} title="Skills">
    <dl className="border-t border-ink/10">
      {skills.map(({name, skills: items}) => (
        <div className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-5 sm:grid-cols-[10.5rem_1fr]" key={name}>
          <dt className="font-display text-base font-semibold text-ink">{name}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {items.map(item => (
                <li className="rounded-full border border-ink/15 bg-white px-3 py-1 text-sm text-ink-soft" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
));

Skills.displayName = 'Skills';
export default Skills;
