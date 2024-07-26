import { useState, useEffect } from 'react';

const useScroll = (edge: number): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > edge);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [edge]);

  return scrolled;
};

export default useScroll;