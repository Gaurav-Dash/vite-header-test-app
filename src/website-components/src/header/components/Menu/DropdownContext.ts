import { createContext } from 'react';

type DropdownContextValue = {
  onDropdownMeasure: (label: string, height: number) => void;
  dropdownHeight: number;
};

export const DropdownContext = createContext<DropdownContextValue>({
  onDropdownMeasure: () => {},
  dropdownHeight: 0,
});
