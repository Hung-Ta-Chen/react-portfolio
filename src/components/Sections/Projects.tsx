import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {projects, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Projects: FC = memo(() => (
  <Section sectionId={SectionId.Projects} title="Selected projects">
    <ul className="border-t border-ink/10">
      {projects.map(({title, description, url, tags}) => (
        <li className="border-b border-ink/10" key={title}>
          <a
            className="group grid items-baseline gap-x-8 gap-y-2 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:grid-cols-[1fr_1.4fr_auto]"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            <h3 className="font-display text-xl font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-gold">
              {title}
            </h3>
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{description}</p>
              <p className="mt-1.5 text-sm text-ink-soft/80">{tags.join(', ')}</p>
            </div>
            <ArrowUpRightIcon className="hidden h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block" />
          </a>
        </li>
      ))}
    </ul>
  </Section>
));

Projects.displayName = 'Projects';
export default Projects;
