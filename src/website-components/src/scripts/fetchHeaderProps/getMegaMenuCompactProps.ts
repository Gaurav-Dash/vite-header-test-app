import { MegaMenuCompactItem } from '../../header/types';
import { getCTAProps } from './getCTAProps';
import { ContentfulMegaMenuCompactItem } from './types';

export const getMegaMenuCompactProps = (
  menuItem: ContentfulMegaMenuCompactItem,
): MegaMenuCompactItem => {
  return {
    type: 'MEGA_COMPACT',
    label: menuItem.label,
    subNavTitle: menuItem.subNavTitle,
    subNavItems: menuItem.subNavItemsCollection.items.map(item => {
      return {
        ...item,
        mainContentCTA: getCTAProps(item.mainContentCta),
        highlightItems: item.highlightItemsCollection.items.map(
          highlightItem => ({
            ...highlightItem,
            cta: getCTAProps(highlightItem.cta),
          }),
        ),
      };
    }),
  };
};
