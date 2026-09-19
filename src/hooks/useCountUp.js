import { useEffect, useRef, useState } from 'react';

// Animates a number from 0 to `end` over `duration` ms, starting only when `start` becomes true.
// Used by the stat counters in the About section so numbers count up as they scroll into view.
export function useCountUp(end, start, duration = 1500) {
  const [value, setValue] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, duration]);

  return value;
}
