import {RefObject, useEffect, useRef, useState} from 'react';

/** True once the element has scrolled into view (fires once). Falls back to true without IntersectionObserver. */
export const useInView = <T extends HTMLElement>(threshold = 0.15): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {threshold, rootMargin: '0px 0px -8% 0px'},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};
