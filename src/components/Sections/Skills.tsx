import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';

const Skills: FC = memo(() => (
  <Section sectionId={SectionId.Skills} title="Skills">
    <dl className="border-t border-ink/10">
      {skills.map(({name, skills: items}) => (
        <div className="grid gap-x-8 gap-y-1 border-b border-ink/10 py-4 sm:grid-cols-[10.5rem_1fr]" key={name}>
          <dt className="font-display text-base font-semibold text-ink">{name}</dt>
          <dd className="text-[0.9375rem] leading-relaxed text-ink-soft">{items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
));

Skills.displayName = 'Skills';
export default Skills;
