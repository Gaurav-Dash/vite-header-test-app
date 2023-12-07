import { Button } from '../../../../../../button';
import { InfoHighlightsContent } from '../../../../InfoHighlightsContent';
import {
  SubNavOverlay,
  SubNavTriggerSection,
} from '../../../../MobileMenu/components/MenuItem/SubNavOverlay';
import {
  InfoHighlightsNavItem as InfoHighlightsNavItemProps,
  InfoHighlightsSubNavItem,
} from '../../../../../types';
import React, { useCallback, useState } from 'react';
import MenuLabel from '../../MenuLabel';
import BackNav from '../../BackNav';
import { MenuSlide } from '../../../../../components/MenuSlide';
import SubNav from '../../../../../components/MobileMenu/components/SubNav';

type Props = InfoHighlightsNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const InfoHighlightsNavItem = ({
  label,
  subNavItems,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<InfoHighlightsSubNavItem | null>(null);

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
      <SubNavOverlay isSubNavOpen={isMenuOpen}>
        <BackNav onClick={handleBackNavClick} />
        <div className="flex-1 relative overflow-hidden">
          <SubNav>
            <SubNavTriggerSection
              items={subNavItems}
              onItemClick={setSelectedSubNavItem}
            />
          </SubNav>
          <MenuSlide isVisible={selectedSubNavItem !== null} className="z-10">
            {selectedSubNavItem ? (
              <div className="h-full flex flex-col">
                <p className="font-var-all-small-caps text-primaryOceanBlue text-mobile/subhead-l py-8 border-b border-b-black/10">
                  {selectedSubNavItem.label}
                </p>
                <div className="flex-1 overflow-y-auto">
                  <InfoHighlightsContent item={selectedSubNavItem} />
                </div>
              </div>
            ) : null}
          </MenuSlide>
        </div>
      </SubNavOverlay>
    </React.Fragment>
  );
};

export default InfoHighlightsNavItem;
