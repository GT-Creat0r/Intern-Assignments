import { useEffect, useRef } from "react";

// usePrevious Hook
// Returns the previous value of a given state or prop.

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
