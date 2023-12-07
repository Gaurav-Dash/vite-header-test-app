import { Cta } from 'src/types';
import {
  HighlightItem,
  MegaMenuLinkSection,
  MegaMenuSubNavItemSection,
  InfoHighlightsNavItem,
  LinkColumnsSubNavItem,
  NavItem,
  Props,
  HighlightSection,
  LinkItem,
} from '../../header/types';
import { IconType } from '../../Icon';
import React from 'react';

const NEW_TAB_ATTRIBUTES = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

const isAbsoluteURl = (url: any) => {
  if (typeof url !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
  }

  // Don't match Windows paths `c:\`
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false;
  }

  // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
  // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
};

export function isRelativeURL(URL = '') {
  if (!URL) return;
  return !!URL.match(/^\/\//) ? false : !isAbsoluteURl(URL);
}

export type RefreshCTAData = {
  type: 'LINK' | 'BUTTON';
  label: string;
  url: string;
  action: 'NAVIGATE' | 'OPEN_MODAL' | 'SCROLL_TO_ID';
  isOpenNewTab?: boolean;
};

export type CtaType = 'BUTTON' | 'LINK';
export type CtaAction = 'NAVIGATE' | 'OPEN_MODAL' | 'SCROLL_TO_ID';
export type CtaVariant = 'primary' | 'secondary';
export type CtaSize = 'sm' | 'lg';

export type IconData = {
  name: IconType;
};

export interface CtaData {
  type?: CtaType;
  label: string;
  url: string;
  action?: CtaAction;
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: IconData | null;
  isOpenNewTab?: boolean;
  className?: string;
  containerClassName?: string;
}

export type Asset = {
  title?: string;
  file: {
    url: string;
    details?: {
      image: {
        width: number;
        height: number;
      };
    };
  };
};

export type ImageData = {
  title: string;
  defaultAsset: Asset;
  mobileAsset?: Asset;
  tabletImage?: Asset;
  contentType?: 'refreshImage';
};

export type HighlightItemData = {
  image: ImageData;
  title?: string;
  description: string;
  cta: CtaData;
  isUpcomingReport?: boolean;
};

export type HighlightSectionData = {
  title: string;
  cards: HighlightItemData[];
};

export type LinkItemData = {
  contentType: 'refreshNavLink';
  title: string;
  description: string;
  url: string;
};

type BaseNavItemData = {
  label: string;
};

export type LinkNavItemData = BaseNavItemData & {
  contentType: 'refreshLinkMenuItem';
  url: string;
};

export type ProductsSubNavItem = {
  contentType: 'refreshMegaMenuSubNavItem';
  label: string;
  titleIcon: IconData;
  title: string;
  description: string;
  overviewLabel?: string;
  overviewUrl?: string;
  highlight: HighlightItemData;
  links: LinkItemData[];
  auxLinkGroupTitle?: string;
  auxLinkGroupLinks?: LinkItemData[];
};

export type MegaMenuLinkSectionData = {
  title?: string;
  items: LinkItemData[];
};

export type MegaMenuSubMenuSectionData = {
  title?: string;
  items: ProductsSubNavItem[];
};

export type MegaMenuNavItemData = BaseNavItemData & {
  contentType: 'refreshMegaMenuNavItem';
  subNavCtaLabel?: string;
  subNavCtaUrl?: string;
  subNavSections: (MegaMenuSubMenuSectionData | MegaMenuLinkSectionData)[];
};

export type InfoHighlightsSubNavItemData = {
  label: string;
  title: string;
  overviewLabel?: string;
  overviewUrl?: string;
  description: string;
  highlights?: HighlightItemData[];
};

export type InfoHighlightsNavItemData = BaseNavItemData & {
  contentType: 'refreshInfoHighlightsNavItem';
  subNavItems: InfoHighlightsSubNavItemData[];
};

export type LinksHighlightsSubNavItem = {
  label: string;
  links: LinkItemData[];
  highlights: HighlightSectionData[];
};

export type LinksHighlightsNavItemData = BaseNavItemData & {
  contentType: 'refreshLinksHighlightsNavItem';
  subNavItems: LinksHighlightsSubNavItem[];
};

export type NestedMenuInfoHighlightsNavItemData = BaseNavItemData & {
  contentType: 'refreshNestedMenuInfoHighlights';
  subMenuItems: (InfoHighlightsNavItemData | LinkColumnsSubNavItemData)[];
};

export type NavLinkColumnSection = {
  title: string;
  links: LinkItemData[];
};

export type LinkColumnsSubNavItemData = BaseNavItemData & {
  contentType: 'linkColumnsSubNavItem';
  columns: NavLinkColumnSection[];
};

export type NavItemData =
  | LinkNavItemData
  | MegaMenuNavItemData
  | InfoHighlightsNavItemData
  | LinksHighlightsNavItemData
  | NestedMenuInfoHighlightsNavItemData
  | LinkColumnsSubNavItemData;

export type HeaderData = {
  navItems: NavItemData[];
  primaryCta: CtaData;
  loginCta: CtaData;
  supportCta: CtaData;
  ctas: CtaData[];
};

export const getCtaProps = (ctaData: CtaData): Cta => {
  return {
    ...ctaData,
    icon: ctaData?.icon?.name ?? undefined,
  };
};

export const getLinkItemProps = (link: LinkItemData): LinkItem => {
  return {
    title: link.title,
    description: link.description,
    cta: getCtaProps({
      type: 'LINK',
      action: 'NAVIGATE',
      label: link.title ?? '',
      url: link.url,
    }),
  };
};

const getHighlightItemProps = (item: HighlightItemData): HighlightItem => {
  return {
    title: item.title,
    image: item.image,
    cta: getCtaProps(item.cta),
    description: item.description,
    isUpcomingReport: item.isUpcomingReport ?? false,
  };
};

const getHighlightSectionProps = (
  item: HighlightSectionData,
): HighlightSection => {
  return {
    title: item.title,
    cards: item.cards.map(getHighlightItemProps),
  };
};

const isMegaMenuSubMenuSection = (
  section: MegaMenuSubMenuSectionData | MegaMenuLinkSectionData,
): section is MegaMenuSubMenuSectionData => {
  return (
    section.items &&
    section.items[0].contentType === 'refreshMegaMenuSubNavItem'
  );
};

const getMegaMenuSubNavSections = (
  subNavSections: (MegaMenuSubMenuSectionData | MegaMenuLinkSectionData)[],
): (MegaMenuSubNavItemSection | MegaMenuLinkSection)[] => {
  return subNavSections.map(section => {
    if (isMegaMenuSubMenuSection(section)) {
      return {
        type: 'SUB_MENU',
        title: section.title,
        items: section.items.map(item => {
          const {
            overviewLabel,
            overviewUrl,
            links,
            auxLinkGroupLinks,
            titleIcon,
            highlight,
            ...restProps
          } = item;
          return {
            ...restProps,
            titleIcon: titleIcon?.name ?? undefined,
            highlight: highlight ? getHighlightItemProps(highlight) : undefined,
            overviewCta:
              overviewLabel && overviewUrl
                ? getCtaProps({
                    label: overviewLabel,
                    url: overviewUrl,
                    action: 'NAVIGATE',
                    type: 'LINK',
                  })
                : undefined,
            links: links.map(link => {
              return {
                ...link,
                cta: getCtaProps({
                  label: link.title,
                  url: link.url,
                  type: 'LINK',
                  action: 'NAVIGATE',
                }),
              };
            }),
            auxLinkGroupLinks: auxLinkGroupLinks?.map(link => {
              return {
                ...link,
                cta: getCtaProps({
                  label: link.title,
                  url: link.url,
                  type: 'LINK',
                  action: 'NAVIGATE',
                }),
              };
            }),
          };
        }),
      } as MegaMenuSubNavItemSection;
    }
    return {
      type: 'LINK',
      title: section.title,
      items: section.items.map(item => {
        const link = getLinkItemProps(item);
        return {
          cta: link.cta,
          label: link.title,
        };
      }),
    } as MegaMenuLinkSection;
  });
};

const getNavItemProps = (navItem: NavItemData): NavItem | null => {
  switch (navItem.contentType) {
    case 'refreshLinkMenuItem': {
      return {
        type: 'LINK',
        label: navItem.label,
        cta: getCtaProps({
          label: navItem.label,
          url: navItem.url,
          action: 'NAVIGATE',
        }),
      };
    }

    case 'refreshMegaMenuNavItem': {
      return {
        type: 'MEGA_MENU',
        label: navItem.label,
        subNavCta:
          navItem.subNavCtaLabel && navItem.subNavCtaUrl
            ? getCtaProps({
                label: navItem.subNavCtaLabel,
                action: 'NAVIGATE',
                type: 'LINK',
                url: navItem.subNavCtaUrl,
              })
            : undefined,
        sections: getMegaMenuSubNavSections(navItem.subNavSections),
      };
    }

    case 'refreshInfoHighlightsNavItem': {
      return {
        type: 'INFO_HIGHLIGHTS',
        label: navItem.label,
        subNavItems: navItem.subNavItems.map(
          ({ overviewLabel, overviewUrl, highlights, ...restProps }) => {
            return {
              ...restProps,
              overviewCta:
                overviewLabel && overviewUrl
                  ? getCtaProps({
                      label: overviewLabel,
                      url: overviewUrl,
                      action: 'NAVIGATE',
                      type: 'LINK',
                    })
                  : undefined,
              highlights: (highlights ?? []).map(getHighlightItemProps),
            };
          },
        ),
      };
    }

    case 'refreshNestedMenuInfoHighlights': {
      return {
        type: 'MULTI_LEVEL_INFO_HIGHLIGHTS',
        ...navItem,
        subMenuItems: navItem.subMenuItems.map(subMenuItem => {
          return subMenuItem.contentType === 'linkColumnsSubNavItem'
            ? (getNavItemProps({
                ...subMenuItem,
                contentType: 'linkColumnsSubNavItem',
              }) as LinkColumnsSubNavItem)
            : (getNavItemProps({
                ...subMenuItem,
                contentType: 'refreshInfoHighlightsNavItem',
              }) as InfoHighlightsNavItem);
        }),
      };
    }

    case 'refreshLinksHighlightsNavItem': {
      return {
        type: 'LINKS_HIGHLIGHTS',
        label: navItem.label,
        subNavItems: navItem.subNavItems.map(
          ({ highlights, links, ...restProps }) => {
            return {
              ...restProps,
              links: links.map(link => {
                return {
                  ...link,
                  cta: getCtaProps({
                    label: link.title,
                    url: link.url,
                    action: 'NAVIGATE',
                    type: 'LINK',
                  }),
                };
              }),
              highlights: highlights?.map(getHighlightSectionProps),
            };
          },
        ),
      };
    }

    case 'linkColumnsSubNavItem': {
      return {
        type: 'LINKS_COLUMN',
        label: navItem.label,
        columns: navItem.columns.map(item => {
          return {
            title: item.title,
            links: item.links.map(link => {
              return {
                title: link.title,
                cta: getCtaProps({
                  label: link.title,
                  url: link.url,
                  action: 'NAVIGATE',
                  type: 'LINK',
                }),
              };
            }),
          };
        }),
      };
    }

    default:
      return null;
  }
};

export const getCTAComponent =
  () =>
  // eslint-disable-next-line react/display-name
  ({
    children,
    ...ctaProps
  }: Cta & { data?: RefreshCTAData } & {
    children: React.ReactNode;
  }): React.ReactElement => {
    if (!ctaProps) {
      return <React.Fragment>{children}</React.Fragment>;
    }

    const url = ctaProps.data?.url;
    const action = ctaProps.data?.action;

    if (action === 'NAVIGATE') {
      let external = false;
      let isOpenNewTab = false;
      if (ctaProps.type === 'LINK') {
        if (ctaProps.isMenuCTA) {
          external = ctaProps.external;
          isOpenNewTab = ctaProps.isOpenNewTab;
        } else {
          external = ctaProps.external;
          isOpenNewTab = ctaProps.external;
        }
      } else {
        external = !isRelativeURL(url);
        isOpenNewTab = external;
      }

      return (
        <a href={url} {...(isOpenNewTab ? NEW_TAB_ATTRIBUTES : {})}>
          {children}
        </a>
      );
    }

    return (
      <button
        onClick={() => {
          // TODO: Implement Modal
          // setModalData(ctaProps);
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        {children}
      </button>
    );
  };

export const ImageComponent = ({
  imageData,
  imageClassName = '',
}: {
  imageData: any;
  imageClassName?: string;
}) => {
  if (!imageData) return null;
  return imageData?.defaultAsset?.file?.url?.includes('.svg') ? (
    <img
      src={imageData?.defaultAsset?.file?.url}
      className={imageClassName}
      alt={imageData.title}
      width="100%"
    />
  ) : null;
};

const getHeaderProps = (header: HeaderData): Props => {
  const { ctas, navItems, primaryCta, loginCta, supportCta } = header;
  const mainLogoCta = {
    name: 'Sprinklr Logo',
    label: 'Sprinklr Logo',
    url: '/',
    action: 'NAVIGATE',
  };

  const secondaryCtaData = ctas[0] ?? null;
  const auxCtaData = ctas[1] ?? null;

  return {
    mainLogoCta: mainLogoCta,
    primaryCta: getCtaProps(primaryCta),
    loginCta: getCtaProps(loginCta),
    supportCta: getCtaProps(supportCta),
    secondaryCta: secondaryCtaData ? getCtaProps(secondaryCtaData) : undefined,
    auxCta: auxCtaData ? getCtaProps(auxCtaData) : undefined,
    languageSelector: undefined,
    ImageComponent: ImageComponent,
    CTAComponent: getCTAComponent(),
    navItems: navItems
      .map(getNavItemProps)
      .filter<NavItem>((navItem): navItem is NavItem => navItem !== null),
  };
};

export default getHeaderProps;
