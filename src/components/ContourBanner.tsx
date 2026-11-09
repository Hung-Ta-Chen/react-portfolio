import {FC, memo} from 'react';

import {contourPaths} from '../data/contours';

// Each role crops the same topographic rings differently, so the banners look related but not identical.
const crops = ['100 250 800 300', '-120 140 800 300', '260 330 700 300', '0 40 800 300'];

/** Decorative banner art in the site's contour style. Lines draw in when the parent card is revealed. */
const ContourBanner: FC<{variant: number; className?: string}> = memo(({variant, className}) => (
  <svg
    aria-hidden
    className={`banner-contour ${className ?? ''}`}
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    viewBox={crops[variant % crops.length]}>
    {contourPaths.map((d, i) => (
      <path
        d={d}
        key={d}
        pathLength={1}
        stroke={i % 5 === 0 ? '#D9A441' : '#FFFFFF'}
        strokeLinejoin="round"
        strokeOpacity={i % 5 === 0 ? 0.9 : 0.16}
        strokeWidth={i % 5 === 0 ? 1.8 : 1}
        style={{['--i' as string]: i}}
      />
    ))}
  </svg>
));

ContourBanner.displayName = 'ContourBanner';
export default ContourBanner;
