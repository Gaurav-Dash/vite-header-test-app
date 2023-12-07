'use client';
import React, { ReactNode, useLayoutEffect, useRef } from 'react';

export const HeightObserver = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${entry.contentRect.height}px`,
        );
      }
    });
    observer.observe(containerRef.current!);
    return () => {
      document.documentElement.style.setProperty('--header-height', `${0}px`);
      observer.disconnect();
    };
  }, [children]);
  return (
    <div ref={containerRef} className={className ?? undefined}>
      {children}
    </div>
  );
};
