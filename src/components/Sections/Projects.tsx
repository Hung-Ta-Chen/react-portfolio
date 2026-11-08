import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {projects, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Projects: FC = memo(() => (
  <Section sectionId={SectionId.Projects} title="Selected projects">
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map(({title, description, url, tags}) => (
        <li key={title}>
          <a
            className="group flex h-full flex-col rounded-xl border border-zinc-200 p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            <div className="flex items-start justify-between gap-x-2">
              <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-indigo-600" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Section>
));

Projects.displayName = 'Projects';
export default Projects;
