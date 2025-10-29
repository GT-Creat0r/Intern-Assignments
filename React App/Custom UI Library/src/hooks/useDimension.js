import { useState, useLayoutEffect, useRef } from "react";

// useDimension Hook
// Measures width and height of a DOM element in real-time.

export function useDimension() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions({ width, height });
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => updateDimensions());
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return [ref, dimensions];
}
