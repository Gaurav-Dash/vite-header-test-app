import React, { ReactNode } from 'react';
import { cn } from '../../tailwind';

export const MenuSlide = ({
  isVisible,
  className,
  children,
}: {
  isVisible: boolean;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'absolute h-full w-full bg-white pointer-events-none opacity-0 translate-x-[10%] left-0 top-0',
        'transition-[opacity,transform] duration-150 ease-in-out',
        isVisible ? 'opacity-100 translate-x-0 pointer-events-auto' : '',
        className,
      )}
    >
      {children}
    </div>
  );
};
