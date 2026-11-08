import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<PropsWithChildren<{sectionId: SectionId; title?: string}>> = memo(
  ({children, sectionId, title}) => (
    <section className="scroll-mt-20 py-12 sm:py-16" id={sectionId}>
      {title && (
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-indigo-600">{title}</h2>
      )}
      {children}
    </section>
  ),
);

Section.displayName = 'Section';
export default Section;
