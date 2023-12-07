import React from 'react';
import { CTAComponent } from '../../../../../ExternalComponent/ExternalComponent';
import { NavItem as MenuItemProps } from '../../../../types';
import MenuLabel from '../MenuLabel';
import InfoHighlights from './InfoHighlightsNavItem';
import LinkHighlights from './LinksHighlightsNavItem';
import MegaMenu from './MegaMenuNavItem';
import NestedMenuInfoHighlightsNavItem from './NestedMenuInfoHighlightsNavItem';

type Props = MenuItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const MenuItem = (props: Props): React.ReactElement | null => {
  switch (props.type) {
    case 'LINK': {
      const { label, cta } = props;
      return (
        <CTAComponent {...cta}>
          <MenuLabel label={label} />
        </CTAComponent>
      );
    }
    case 'MEGA_MENU': {
      return <MegaMenu {...props} />;
    }
    case 'MULTI_LEVEL_INFO_HIGHLIGHTS': {
      return <NestedMenuInfoHighlightsNavItem {...props} />;
    }
    case 'INFO_HIGHLIGHTS': {
      return <InfoHighlights {...props} />;
    }
    case 'LINKS_HIGHLIGHTS': {
      return <LinkHighlights {...props} />;
    }
    default:
      return null;
  }
};

export default MenuItem;
