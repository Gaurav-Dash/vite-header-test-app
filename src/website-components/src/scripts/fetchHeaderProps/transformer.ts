import { HeaderProps, Menu, MenuItem } from '../../header/types';
import { getCTAProps } from './getCTAProps';
import { getLinkHighlightMenuProps } from './getLinkHighlightMenuProps';
import { getLinkMenuItem } from './getLinkMenuItem';
import { getMegaMenuCompactProps } from './getMegaMenuCompactProps';
import { getMegaMenuProps } from './getMegaMenuProps';
import { getListMenuProps } from './getListMenuProps';
import { ContentfulCTA, ContentfulMenu } from './types';

function getMenuProps(menuCollection: ContentfulMenu): Menu {
  const menuItems = menuCollection.items
    .map(menuItem => {
      switch (menuItem.__typename) {
        case 'MegaMenuCompact': {
          return getMegaMenuCompactProps(menuItem);
        }

        case 'LinkHighlightMenu': {
          return getLinkHighlightMenuProps(menuItem);
        }

        case 'MenuGroup': {
          if (menuItem.isMegaMenuGroup) {
            return getMegaMenuProps(menuItem);
          } else {
            if (menuItem.menuItemsCollection.items.length === 1) {
              return getLinkMenuItem(menuItem);
            } else if (menuItem.menuItemsCollection.items.length > 1) {
              return getListMenuProps(menuItem);
            }
          }
          return null;
        }
        default:
          return null;
      }
    })
    .filter(menuItem => menuItem != null) as MenuItem[];
  return {
    items: menuItems,
  };
}

export default function transformDataToHeaderProps(data: {
  headerData: {
    contact: ContentfulCTA;
    secondaryCta: ContentfulCTA;
    login: ContentfulCTA;
    menuV2Collection: ContentfulMenu;
  };
}): Pick<HeaderProps, 'primaryCTA' | 'secondaryCTA' | 'loginCTA' | 'menu'> {
  const { contact, secondaryCta, login, menuV2Collection } = data.headerData;

  return {
    primaryCTA: getCTAProps(contact),
    secondaryCTA: getCTAProps(secondaryCta),
    loginCTA: getCTAProps(login),
    menu: getMenuProps(menuV2Collection),
  };
}
