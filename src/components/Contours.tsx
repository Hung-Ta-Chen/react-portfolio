import {FC, memo} from 'react';

import {contourPaths} from '../data/contours';

/** Decorative topographic rings. Drawn once on load; static when reduced motion is requested. */
const Contours: FC<{className?: string}> = memo(({className}) => (
  <svg aria-hidden className={`contour ${className ?? ''}`} fill="none" viewBox="0 0 800 800">
    {contourPaths.map((d, i) => (
      <path
        d={d}
        key={d}
        pathLength={1}
        stroke={i % 5 === 0 ? '#D9A441' : '#101B33'}
        strokeLinejoin="round"
        strokeOpacity={i % 5 === 0 ? 0.75 : 0.16}
        strokeWidth={i % 5 === 0 ? 1.6 : 1}
        style={{['--i' as string]: i}}
      />
    ))}
  </svg>
));

Contours.displayName = 'Contours';
export default Contours;
