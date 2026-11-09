import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import useInView from '../hooks/useInView';
import useScrollFill from '../hooks/useScrollFill';

interface TimelineEntryProps {
  date: string;
  location: string;
}

/** One row of the experience timeline: date column, a rail that fills with scroll, and staggered content. */
const TimelineEntry: FC<PropsWithChildren<TimelineEntryProps>> = memo(({date, location, children}) => {
  const [itemRef, inView] = useInView<HTMLLIElement>();
  const bodyRef = useScrollFill<HTMLDivElement>();

  return (
    <li
      className={classNames('tl-item grid gap-x-10 sm:grid-cols-[10.5rem_1fr]', {'is-visible': inView})}
      ref={itemRef}>
      <div className="tl-date pb-3 text-sm text-ink-soft sm:pb-0 sm:pt-1 sm:text-right">
        <p className="font-medium text-ink">{date}</p>
        <p>{location}</p>
      </div>
      <div className="tl-body relative pb-14 pl-7 [li:last-child>&]:pb-0 sm:pl-9" ref={bodyRef}>
        <span className="tl-line absolute left-0 top-0 h-full w-px bg-ink/15" />
        <span className="tl-marker absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-gold" />
        <span className="tl-dot absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 border-gold bg-paper" />
        {children}
      </div>
    </li>
  );
});

TimelineEntry.displayName = 'TimelineEntry';
export default TimelineEntry;
