// Prevents setting state on unmounted components (avoids memory leaks with async code).
import { useEffect, useRef } from 'react';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

/*
const isMounted = useIsMounted();

useEffect(() => {
  fetchData().then(() => {
    if (isMounted.current) {
      setState(...);
    }
  });
}, []);
*/