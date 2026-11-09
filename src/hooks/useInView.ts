import {RefObject, useEffect, useRef, useState} from 'react';

/** Becomes true (and stays true) the first time the element scrolls into view. */
const useInView = <T extends HTMLElement>(threshold = 0.12): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
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

export default useInView;
