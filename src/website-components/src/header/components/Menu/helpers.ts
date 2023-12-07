import { MegaMenuLinkSection, MegaMenuSubNavItemSection } from '../../types';

export const isSubMenuItemSection = (
  section: MegaMenuSubNavItemSection | MegaMenuLinkSection,
): section is MegaMenuSubNavItemSection => section.type === 'SUB_MENU';
