'use client';
import { useState, useEffect } from 'react';

export const useInnerHeight = () => {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const appHeight = () => setInnerHeight(window.innerHeight);
    window.addEventListener('resize', appHeight);
    appHeight();
    return () => window.removeEventListener('resize', appHeight);
  }, [setInnerHeight]);

  return { innerHeight };
};
