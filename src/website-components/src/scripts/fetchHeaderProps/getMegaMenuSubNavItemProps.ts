import { MegaSubNavItem } from '../../header/types';
import { ContentfulMegaMenuSubNavItem } from './types';
import { getCTAProps } from './getCTAProps';
import { NAVIGATE_TO_URL_CTA_ACTION } from './constants';

export const getMegaMenuSubNavItemProps = (
  subNavItem: ContentfulMegaMenuSubNavItem,
): MegaSubNavItem => {
  return {
    title: subNavItem.mainProductName,
    mainSection: {
      header: {
        icon: subNavItem.mainProductLogo,
        title: subNavItem.mainProductName,
        subtitle: subNavItem.mainProductDescription,
        primaryCTA: getCTAProps(subNavItem.mainProductOverviewCta),
        secondaryCTA: getCTAProps(subNavItem.mainProductWatchDemoCta),
      },
      featureGrid: {
        title: subNavItem.productLinksHeader,
        features: subNavItem.productLinksCollection.items.map(feature => {
          return {
            headingCTA: getCTAProps({
              type: 'LINK',
              action: NAVIGATE_TO_URL_CTA_ACTION,
              url: feature.link,
              text: feature.label,
            }),
            description: feature.megaMenuDescription,
          };
        }),
      },
    },
    highlightSection: {
      image: subNavItem.highlightImage,
      cta: getCTAProps({
        type: 'LINK',
        action: NAVIGATE_TO_URL_CTA_ACTION,
        text: subNavItem.productHighlightCtaText,
        url: subNavItem.highlightReadMoreUrl,
      }),
      description: subNavItem.highlightDescription,
    },
  };
};
