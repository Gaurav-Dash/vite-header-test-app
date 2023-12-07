import React from 'react';
import { useCallback } from 'react';
import { NavItem as NavItemProps } from '../../../../types';
import LinkMenuItem from './LinkMenuItem';
import MegaMenuNavItem from './MegaMenuNavItem';
import InfoHighlightsNavItem from './InfoHighlightsNavItem';
import LinksHighlightsNavItem from './LinksHighlightsNavItem';
import NestedMenuInfoHighlightsNavItem from './NestedMenuInfoHighlightsNavItem';

type Props = NavItemProps & {
  onHover: (label: string) => void;
  isHovered: boolean;
};
const MenuItem = (props: Props) => {
  const { label, type, onHover } = props;
  let menuItemComponent = null;

  switch (type) {
    case 'LINK': {
      menuItemComponent = <LinkMenuItem {...props} />;
      break;
    }
    case 'MEGA_MENU': {
      menuItemComponent = <MegaMenuNavItem {...props} />;
      break;
    }
    case 'INFO_HIGHLIGHTS': {
      menuItemComponent = <InfoHighlightsNavItem {...props} />;
      break;
    }
    case 'MULTI_LEVEL_INFO_HIGHLIGHTS': {
      menuItemComponent = <NestedMenuInfoHighlightsNavItem {...props} />;
      break;
    }
    case 'LINKS_HIGHLIGHTS': {
      menuItemComponent = <LinksHighlightsNavItem {...props} />;
      break;
    }
    default: {
      menuItemComponent = null;
    }
  }

  const handleHover = useCallback(() => {
    onHover(label);
  }, [onHover, label]);

  if (!menuItemComponent) {
    return null;
  }

  return (
    <li onMouseEnter={handleHover} className="flex items-center">
      {menuItemComponent}
    </li>
  );
};

export default MenuItem;
