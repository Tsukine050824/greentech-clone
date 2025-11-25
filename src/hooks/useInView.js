import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0.2, once: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once) obs.disconnect();
      } else if (!options.once) {
        setInView(false);
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}
