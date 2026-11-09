import {RefObject, useEffect, useRef} from 'react';

/**
 * Writes a 0..1 value to the element's `--fill` CSS variable that follows how far the page has been
 * scrolled through it, and sets `data-active` while that value is strictly between 0 and 1. Updates the DOM directly so scrolling never triggers a React re-render.
 */
const useScrollFill = <T extends HTMLElement>(): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / Math.max(rect.height, 1);
      const clamped = Math.min(1, Math.max(0, progress));
      el.style.setProperty('--fill', clamped.toFixed(3));
      el.toggleAttribute('data-active', clamped > 0 && clamped < 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
};

export default useScrollFill;
