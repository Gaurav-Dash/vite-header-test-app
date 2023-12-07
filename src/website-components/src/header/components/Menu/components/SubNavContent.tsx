import React, { ReactNode } from 'react';

export const SubNavContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 grid auto-rows-auto auto-cols-full">{children}</div>
  );
};
