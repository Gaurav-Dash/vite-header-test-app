import { LinkHighlightMenuItem } from '../../header/types';
import { NAVIGATE_TO_URL_CTA_ACTION } from './constants';
import { getCTAProps } from './getCTAProps';
import { ContentfulLinkHighlightMenuItem } from './types';

export const getLinkHighlightMenuProps = (
  menuItem: ContentfulLinkHighlightMenuItem,
): LinkHighlightMenuItem => {
  return {
    type: 'LINK_HIGHLIGHT',
    label: menuItem.label,
    linkGroups: menuItem.linkGroupsCollection.items.map(linkGroup => ({
      links: linkGroup.linksCollection.items.map(link => ({
        cta: getCTAProps({
          type: 'LINK',
          action: NAVIGATE_TO_URL_CTA_ACTION,
          text: link.label,
          url: link.url,
          external: false,
        }),
        label: link.label,
        badgeText: link.badgeText,
      })),
    })),
    highlightItems: menuItem.highlightItemsCollection.items.map(
      highlightItem => ({
        title: highlightItem.title,
        description: highlightItem.description,
        cta: getCTAProps(highlightItem.cta),
        image: highlightItem.image,
      }),
    ),
  };
};
