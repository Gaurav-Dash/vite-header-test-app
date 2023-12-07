import React, {
  CSSProperties,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DropdownContext } from '../../DropdownContext';

const MenuDropdownWrapper = ({
  activeMenuItemLabel,
  children,
}: {
  activeMenuItemLabel: string | null;
  children: React.ReactNode;
}) => {
  const [menuHeights, setMenuHeights] = useState<{ [key: string]: number }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const handleDropdownMeasure = useCallback(
    (label: string, height: number) => {
      setMenuHeights(prev => ({ ...prev, [label]: height }));
    },
    [setMenuHeights],
  );
  const dropdownHeight = activeMenuItemLabel
    ? menuHeights[activeMenuItemLabel] ?? 0
    : 0;

  const backdropHeightStyles = useMemo<CSSProperties>(
    () => ({
      height: `${dropdownHeight}px`,
    }),
    [dropdownHeight],
  );
  return (
    <DropdownContext.Provider
      value={{
        onDropdownMeasure: handleDropdownMeasure,
        dropdownHeight: dropdownHeight,
      }}
    >
      <div className="h-full" ref={containerRef}>
        <div
          style={backdropHeightStyles}
          className="w-full absolute top-full left-0 bg-white transition-[height] duration-200 shadow-menu max-h-[calc(100vh_-_var(--header-height)_-_20px)] -z-10"
        />
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default MenuDropdownWrapper;
