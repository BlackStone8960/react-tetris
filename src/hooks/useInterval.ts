import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<null | (() => void)>(null);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      console.log({ setid: id });
      return () => {
        console.log({ clearId: id });
        clearInterval(id);
      };
    }
  }, [delay]);
}
