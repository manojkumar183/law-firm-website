import { useEffect, useRef, useState } from 'react';

// Reusable hook: reports whether the attached element has scrolled into view.
// Used to trigger fade-in/slide-up animations and stat count-up effects once,
// the first time a section becomes visible.
export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // only need to animate once
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
}
