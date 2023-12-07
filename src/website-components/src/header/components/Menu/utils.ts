import { MENU_TYPES } from './constants';

export const isFullWidthDropdownMenuItem = (menuItemType: string) => {
  return (
    [
      MENU_TYPES.MEGA,
      MENU_TYPES.MEGA_COMPACT,
      MENU_TYPES.LINK_HIGHLIGHT,
    ] as string[]
  ).includes(menuItemType);
};
