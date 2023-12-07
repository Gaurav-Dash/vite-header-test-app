import { Button } from '../../../../../../button';
import { LinksHighlightsContent } from '../../../../LinksHighlightsContent';
import {
  SubNavOverlay,
  SubNavTriggerSection,
} from '../../../../MobileMenu/components/MenuItem/SubNavOverlay';
import {
  LinksHighlightsNavItem as LinksHighlightsNavItemProps,
  LinksHighlightsSubNavItem,
} from '../../../../../types';
import React, { useCallback, useState } from 'react';
import MenuLabel from '../../MenuLabel';
import BackNav from '../../../../../components/MobileMenu/components/BackNav';
import SubNav from '../../../../../components/MobileMenu/components/SubNav';
import { MenuSlide } from '../../../../../components/MenuSlide';

type Props = LinksHighlightsNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const LinksHighlightsNavItem = ({
  label,
  subNavItems,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<LinksHighlightsSubNavItem | null>(null);

  const updateMenuOpenState = useCallback(
    (isMenuOpen: boolean) => {
      setIsMenuOpen(isMenuOpen);
      onSubMenuOverlayToggled(isMenuOpen);
    },
    [onSubMenuOverlayToggled],
  );

  const handleMenuItemClick = useCallback(() => {
    updateMenuOpenState(true);
  }, [updateMenuOpenState]);

  const handleBackNavClick = useCallback(() => {
    if (selectedSubNavItem != null) {
      return setSelectedSubNavItem(null);
    }
    updateMenuOpenState(false);
  }, [updateMenuOpenState, selectedSubNavItem]);

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuItemClick}
        variant="bare"
        size="bare"
        className="w-full"
      >
        <MenuLabel label={label} isArrowEnabled />
      </Button>
      <SubNavOverlay isSubNavOpen={isMenuOpen} className="px-5 tablet:px-10">
        <BackNav onClick={handleBackNavClick} />
        <div className="flex-1 relative overflow-hidden">
          <SubNav>
            <SubNavTriggerSection
              items={subNavItems}
              onItemClick={setSelectedSubNavItem}
            />
          </SubNav>
          <MenuSlide isVisible={selectedSubNavItem !== null}>
            {selectedSubNavItem ? (
              <div className="h-full flex flex-col">
                <p className="font-var-all-small-caps text-mobile/subhead-l text-primaryOceanBlue py-8 border-b border-b-black/10">
                  {selectedSubNavItem.label}
                </p>
                <div className="flex-1 overflow-y-auto">
                  <LinksHighlightsContent item={selectedSubNavItem} />
                </div>
              </div>
            ) : null}
          </MenuSlide>
        </div>
      </SubNavOverlay>
    </React.Fragment>
  );
};

export default LinksHighlightsNavItem;
