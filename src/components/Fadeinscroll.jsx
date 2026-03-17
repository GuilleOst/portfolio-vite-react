import { useState, useEffect, useRef } from 'react';

export const useFadeInOnScroll = (threshold = 0.2) => {
  const [esVisible, setEsVisible] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEsVisible(true);
          observador.disconnect(); 
        }
      },
      { threshold } 
    );

    if (elementoRef.current) {
      observador.observe(elementoRef.current);
    }

    return () => observador.disconnect();
  }, [threshold]);

  return [elementoRef, esVisible];
};