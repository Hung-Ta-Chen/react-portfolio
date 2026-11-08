import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<PropsWithChildren<{sectionId: SectionId; title?: string}>> = memo(
  ({children, sectionId, title}) => (
    <section className="scroll-mt-20 py-14 sm:py-20" id={sectionId}>
      {title && <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>}
      {children}
    </section>
  ),
);

Section.displayName = 'Section';
export default Section;
