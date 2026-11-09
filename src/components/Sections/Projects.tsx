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
            className="group block py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            <div className="flex items-start justify-between gap-x-4">
              <h3 className="font-display text-xl font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-gold">
                {title}
              </h3>
              <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>
            <p className="mt-1.5 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">{description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map(tag => (
                <li className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs text-ink-soft" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        </li>
      ))}
    </ul>
  </Section>
));

Projects.displayName = 'Projects';
export default Projects;
