import { MenuSlide } from '../../../../../components/MenuSlide';
import BackNav from '../../../../../components/MobileMenu/components/BackNav';
import SubNav from '../../../../../components/MobileMenu/components/SubNav';
import React, { useCallback, useState } from 'react';
import { Button } from '../../../../../../button';
import {
  MegaMenuNavItem as MegaMenuNavItemProps,
  MegaMenuSubNavMenuItem,
} from '../../../../../types';
import MegaMenuContent from '../../../../MegaMenuContent';
import MenuLabel from '../../MenuLabel';
import {
  SubNavLinkSection,
  SubNavOverlay,
  SubNavTriggerSection,
} from '../SubNavOverlay';

type Props = MegaMenuNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const MegaMenuNavItem = ({
  label,
  sections,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<MegaMenuSubNavMenuItem | null>(null);

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
            {sections.map(section => {
              return section.type === 'LINK' ? (
                <SubNavLinkSection
                  items={section.items}
                  title={section.title}
                />
              ) : (
                <SubNavTriggerSection
                  items={section.items}
                  title={section.title}
                  onItemClick={setSelectedSubNavItem}
                />
              );
            })}
          </SubNav>
          <MenuSlide isVisible={selectedSubNavItem !== null} className="z-10">
            {selectedSubNavItem ? (
              <div className="h-full flex flex-col">
                <p className="font-var-all-small-caps text-primaryOceanBlue text-mobile/subhead-l py-8 border-b border-b-black/10">
                  {selectedSubNavItem.label}
                </p>
                <div className="flex-1 overflow-y-auto">
                  <MegaMenuContent variant="MOBILE" item={selectedSubNavItem} />
                </div>
              </div>
            ) : null}
          </MenuSlide>
        </div>
      </SubNavOverlay>
    </React.Fragment>
  );
};

export default MegaMenuNavItem;
