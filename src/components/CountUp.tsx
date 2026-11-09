import {FC, memo, useEffect, useState} from 'react';

import {useInView} from '../hooks/useInView';

/** Counts from 0 to `value` when scrolled into view. Shows the final number if reduced motion is on. */
const CountUp: FC<{value: number; prefix?: string; suffix?: string}> = memo(({value, prefix = '', suffix = ''}) => {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
});

CountUp.displayName = 'CountUp';
export default CountUp;
