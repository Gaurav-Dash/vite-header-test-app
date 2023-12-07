import React, { ReactNode } from 'react';
import MenuLabel from './MenuLabel';

export const DropdownMenuTrigger = ({
  label,
  isHovered,
  children,
}: {
  label: string;
  isHovered: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="h-full">
      <button className="relative h-full" aria-expanded={isHovered}>
        <MenuLabel label={label} isActive={isHovered} isDropdown isUnderlined />
        <div className="absolute bottom-0 w-full h-10 translate-y-full" />
      </button>
      {children}
    </div>
  );
};
