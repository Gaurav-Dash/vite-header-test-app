import React, { useContext, useEffect, useMemo } from 'react';
import { useMeasure } from 'react-use';
import { cn } from '../../../../../tailwind';
import { DropdownContext } from '../../DropdownContext';

const MenuDropdownContainer = ({
  label,
  outerContainerClassname,
  isActive,
  children,
}: {
  label: string;
  outerContainerClassname?: string;
  isActive: boolean;
  children: React.ReactNode;
}): React.ReactElement => {
  const { onDropdownMeasure, dropdownHeight: currentDropdownHeight } =
    useContext(DropdownContext);

  const [dropdownRef, { height: dropdownHeight }] =
    useMeasure<HTMLDivElement>();

  useEffect(() => {
    onDropdownMeasure(label, dropdownHeight);
  }, [onDropdownMeasure, label, dropdownHeight]);

  const heightStyles = useMemo(
    () => ({
      ['--menu-dropdown-height' as string]: `${currentDropdownHeight}px`,
    }),
    [currentDropdownHeight],
  );

  return (
    <div
      className={cn(
        'w-full absolute top-full left-0 opacity-0 max-h-[calc(100vh_-_var(--header-height)_-_20px)] overflow-y-hidden h-[var(--menu-dropdown-height)] bg-white pointer-events-none',
        'transition-opacity duration-200',
        isActive ? 'pointer-events-auto opacity-100 z-10' : '',
        outerContainerClassname,
      )}
      style={heightStyles}
    >
      <div ref={dropdownRef} className="w-full">
        {children}
      </div>
    </div>
  );
};

export default MenuDropdownContainer;
