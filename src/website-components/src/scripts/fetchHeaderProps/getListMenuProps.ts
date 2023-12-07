import { ListMenuItem } from '../../header/types';
import { NAVIGATE_TO_URL_CTA_ACTION } from './constants';
import { ContentfulDefaultMenuGroupItem } from './types';

export const getListMenuProps = (
  menuItem: ContentfulDefaultMenuGroupItem,
): ListMenuItem => {
  const items = menuItem.menuItemsCollection.items;
  const headingMenuItem = items.find(item => item.heading);
  const listItems = items.filter(item => item.heading === false);
  const listMenuItem: ListMenuItem = {
    type: 'LIST',
    label: headingMenuItem?.label ?? '',
    items: listItems.map(item => ({
      cta: {
        type: 'LINK',
        label: item.label,
        href: item.link,
        data: {
          url: item.link,
          action: NAVIGATE_TO_URL_CTA_ACTION,
          isOpenNewTab: item.isOpenNewTab,
          external: item.external,
        },
      },
    })),
  };
  return listMenuItem;
};
