import { MegaMenuItem } from '../../header/types';
import { ContentfulMegaMenuGroupItem } from './types';
import { getCTAProps } from './getCTAProps';
import { getMegaMenuSubNavItemProps } from './getMegaMenuSubNavItemProps';

export const getMegaMenuProps = (
  menuItem: ContentfulMegaMenuGroupItem,
): MegaMenuItem => {
  const { megaMenuHeaderLabel, megaMenuHeader } = menuItem;
  const subNavItems = menuItem.megaMenuItemsCollection.items.map(
    getMegaMenuSubNavItemProps,
  );
  return {
    type: 'MEGA',
    label: megaMenuHeaderLabel,
    header: {
      title: megaMenuHeader.headline,
      caption: megaMenuHeader.caption,
      cta: getCTAProps(megaMenuHeader.callToActionsCollection.items[0]),
      logo: megaMenuHeader.megaMenuHeadlineLogo,
    },
    subNavItems,
  };
};
