import { useState, useEffect } from 'react';
import './polyfill';


const useOnScreen = (ref, rootMargin = '0px') => {
  const [intersecting, setIntersecting] = useState(false); // 是否已经曝光

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [intersecting]
};

export default useOnScreen;

