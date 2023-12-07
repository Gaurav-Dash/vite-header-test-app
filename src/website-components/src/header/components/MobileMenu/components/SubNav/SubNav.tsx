import React from 'react';

function SubNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}

export default SubNav;
