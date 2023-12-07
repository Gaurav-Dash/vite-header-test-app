'use client';
import React, { ReactNode } from 'react';
import { cn } from '../../tailwind';
import useIsHeaderCollapsed from './hooks/useIsHeaderCollapsed';

export const FirstRowWrapper = ({ children }: { children: ReactNode }) => {
  const isHeaderCollapsed = useIsHeaderCollapsed();

  return (
    <div
      className={cn(
        'grid transition-[opacity,_grid-template-rows] duration-200',
        isHeaderCollapsed
          ? 'opacity-0 grid-rows-[0fr]'
          : 'opacity-100 grid-rows-[1fr]',
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
