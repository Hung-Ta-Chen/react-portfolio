import {RefObject, useEffect, useRef} from 'react';

/**
 * Writes a 0..1 value to the element's `--fill` CSS variable that follows how far the page has been
 * scrolled through it. Updates the DOM directly so scrolling never triggers a React re-render.
 */
const useScrollFill = <T extends HTMLElement>(): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / Math.max(rect.height, 1);
      el.style.setProperty('--fill', Math.min(1, Math.max(0, progress)).toFixed(3));
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
