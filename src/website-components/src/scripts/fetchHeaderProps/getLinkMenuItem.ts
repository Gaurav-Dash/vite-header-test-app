import { LinkMenuItem } from '../../header/types';
import { ContentfulDefaultMenuGroupItem } from './types';
import { getCTAProps } from './getCTAProps';
import { NAVIGATE_TO_URL_CTA_ACTION } from './constants';

export const getLinkMenuItem = (
  menuItem: ContentfulDefaultMenuGroupItem,
): LinkMenuItem => {
  const item = menuItem.menuItemsCollection.items[0];
  const linkMenuItem: LinkMenuItem = {
    type: 'LINK',
    label: item.label,
    cta: getCTAProps({
      type: 'LINK',
      text: item.label,
      url: item.link,
      action: NAVIGATE_TO_URL_CTA_ACTION,
      isOpenNewTab: item.isOpenNewTab,
      external: item.external,
    }),
  };
  return linkMenuItem;
};
