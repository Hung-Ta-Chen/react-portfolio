import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';

const Skills: FC = memo(() => (
  <Section sectionId={SectionId.Skills} title="Skills">
    <dl className="space-y-4">
      {skills.map(({name, skills: items}) => (
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-[10rem_1fr]" key={name}>
          <dt className="text-sm font-medium text-zinc-900">{name}</dt>
          <dd className="text-sm text-zinc-600">{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
));

Skills.displayName = 'Skills';
export default Skills;
