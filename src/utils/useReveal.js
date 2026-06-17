import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = Array.from(ref.current?.querySelectorAll('.reveal') || []);
    if (ref.current?.classList.contains('reveal')) {
      elements.push(ref.current);
    }
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
