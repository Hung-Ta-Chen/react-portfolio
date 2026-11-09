import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {useInView} from '../hooks/useInView';

/** Fades and lifts its children in once, the first time they scroll into view. */
const Reveal: FC<PropsWithChildren<{className?: string}>> = memo(({children, className}) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div className={classNames('reveal', {'is-visible': inView}, className)} ref={ref}>
      {children}
    </div>
  );
});

Reveal.displayName = 'Reveal';
export default Reveal;
