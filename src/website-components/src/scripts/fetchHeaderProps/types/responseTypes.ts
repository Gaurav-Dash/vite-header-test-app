export type ContentfulCTA = {
  type: 'LINK' | 'BUTTON';
  text: string;
  url: string;
  action: string;
  eventName?: string;
  genModalContent?: any;
  modalVariant?: any;
  isOpenNewTab?: boolean;
  external?: boolean;
  isMenuCTA?: boolean;
  icon?: string;
  iconAlignment?: 'LEFT' | 'RIGHT';
};

export type ContentfulMenuHighlightItem = {
  title: string;
  description: string;
  cta: ContentfulCTA;
  image: {
    url: string;
  };
};

export type ContentfulLinkHighlightMenuItem = {
  __typename: 'LinkHighlightMenu';
  label: string;
  linkGroupsCollection: {
    items: {
      title?: string;
      linksCollection: {
        items: {
          label: string;
          url: string;
          badgeText?: string;
        }[];
      };
    }[];
  };
  highlightItemsCollection: {
    items: ContentfulMenuHighlightItem[];
  };
};

export type ContentfulMegaMenuCompactItem = {
  __typename: 'MegaMenuCompact';
  label: string;
  subNavTitle: string;
  subNavItemsCollection: {
    items: {
      label: string;
      mainContentTitle: string;
      mainContentDescription: string;
      mainContentCta: ContentfulCTA;
      highlightItemsCollection: {
        items: ContentfulMenuHighlightItem[];
      };
    }[];
  };
};

export type ContentfulMegaMenuSubNavItem = {
  highlightDescription: string;
  highlightImage: {
    url: string;
  };
  highlightLinksToEnglishContent: boolean;
  highlightReadMoreUrl: string;
  mainProductDescription: string;
  mainProductLogo: any;
  mainProductName: string;
  mainProductOverviewCta: ContentfulCTA;
  mainProductWatchDemoCta: ContentfulCTA;
  productHighlightCtaText: string;
  productLinksCollection: {
    total: number;
    items: {
      label: string;
      link: string;
      megaMenuDescription: string;
    }[];
  };
  productLinksHeader: string;
};

export type ContentfulMegaMenuGroupItem = {
  __typename: 'MenuGroup';
  isMegaMenuGroup: true;
  megaMenuHeader: {
    callToActionsCollection: {
      items: ContentfulCTA[];
    };
    headline: string;
    caption: string;
    megaMenuHeadlineLogo: {
      url: string;
    };
  };
  megaMenuHeaderLabel: string;
  megaMenuItemsCollection: {
    items: ContentfulMegaMenuSubNavItem[];
  };
};

export type ContentfulDefaultMenuGroupItem = {
  __typename: 'MenuGroup';
  isMegaMenuGroup: false;
  menuItemsCollection: {
    items: {
      link: string;
      label: string;
      heading: boolean;
      external: boolean;
      isOpenNewTab: boolean;
    }[];
  };
};

export type ContentfulMenuGroupItem =
  | ContentfulDefaultMenuGroupItem
  | ContentfulMegaMenuGroupItem;

export type ContentfulMenuItem =
  | ContentfulMenuGroupItem
  | ContentfulMegaMenuCompactItem
  | ContentfulLinkHighlightMenuItem;

export type ContentfulMenu = {
  items: ContentfulMenuItem[];
};
