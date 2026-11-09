import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import useInView from '../hooks/useInView';
import useScrollFill from '../hooks/useScrollFill';

interface TimelineEntryProps {
  date: string;
  location: string;
  /** Show the gold marker that travels down the rail with scroll. */
  moving?: boolean;
  /** Tighter spacing between entries. */
  compact?: boolean;
}

/** One row of a timeline: date column, a rail with an entry dot (and optionally a scroll-following marker), staggered content. */
const TimelineEntry: FC<PropsWithChildren<TimelineEntryProps>> = memo(({date, location, moving = true, compact = false, children}) => {
  const [itemRef, inView] = useInView<HTMLLIElement>();
  const bodyRef = useScrollFill<HTMLDivElement>(moving);

  return (
    <li
      className={classNames('tl-item grid gap-x-10 sm:grid-cols-[10.5rem_1fr]', {'is-visible': inView})}
      ref={itemRef}>
      <div className="tl-date pb-3 text-sm text-ink-soft sm:pb-0 sm:pt-1 sm:text-right">
        <p className="font-medium text-ink">{date}</p>
        <p>{location}</p>
      </div>
      <div
        className={classNames(
          'tl-body relative border-l border-ink/15 pl-7 [li:last-child>&]:pb-0 sm:pl-9',
          compact ? 'pb-8' : 'pb-14',
        )}
        ref={bodyRef}>
        {moving && <span className="tl-marker absolute -left-[6px] h-[11px] w-[11px] rounded-full bg-gold" />}
        <span className="tl-dot absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 border-gold bg-paper" />
        {children}
      </div>
    </li>
  );
});

TimelineEntry.displayName = 'TimelineEntry';
export default TimelineEntry;
