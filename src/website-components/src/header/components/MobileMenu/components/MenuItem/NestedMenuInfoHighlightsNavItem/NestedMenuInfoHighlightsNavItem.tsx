import { Button } from '../../../../../../button';
import { cn } from '../../../../../../tailwind';
import React, { useCallback, useEffect, useState } from 'react';
import MenuLabel from '../../MenuLabel';
import BackNav from '../../BackNav';
import { InfoHighlightsContent } from '../../../../InfoHighlightsContent';
import SubNav from '../../SubNav';
import SubNavItem from '../../SubNavItem';
import {
  InfoHighlightsNavItem,
  InfoHighlightsSubNavItem,
  LinkColumnsSubNavItem,
  NestedMenuInfoHighlightsNavItem as NestedMenuInfoHighlightsNavItemProps,
} from '../../../../../types';
import {
  SubNavOverlay,
  SubNavTriggerSection,
} from '../../../../MobileMenu/components/MenuItem/SubNavOverlay';
import { MenuSlide } from '../../../../../components/MenuSlide';
import { NavLink } from '../../../../../components/NavLink';

type Props = NestedMenuInfoHighlightsNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const InfoHighlights = ({
  subNavItems,
  isMenuOpen,
}: InfoHighlightsNavItem & { isMenuOpen: boolean }) => {
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<InfoHighlightsSubNavItem | null>(null);
  return (
    <SubNavOverlay isSubNavOpen={isMenuOpen}>
      <div className="h-full relative">
        <SubNav>
          <SubNavTriggerSection
            items={subNavItems}
            onItemClick={setSelectedSubNavItem}
            disablePadding
          />
        </SubNav>
        <MenuSlide isVisible={selectedSubNavItem !== null} className="z-10">
          {selectedSubNavItem ? (
            <div className="h-full flex flex-col">
              <p className="font-var-all-small-caps text-mobile/subhead-l py-8 border-b border-b-black/10">
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
  );
};

const LinkColumns = (
  props: LinkColumnsSubNavItem & { isMenuOpen: boolean },
) => {
  const { isMenuOpen, columns, label } = props;
  return (
    <MenuSlide isVisible={isMenuOpen} className="flex flex-col z-10">
      <p className="font-var-all-small-caps text-mobile/subhead-l py-8 border-b border-b-black/10">
        {label}
      </p>
      <div className="grid grid-flow-row gap-x-10 tablet:grid-cols-2 tablet:items-star overflow-auto">
        {columns.map((col, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex flex-col gap-8 py-10 tablet:pt-[54px]',
                index != columns.length - 1 ? 'border-b border-b-black/10' : '',
              )}
            >
              <div className="text-desktop/subhead-m text-davyGray font-var-all-small-caps mb-2 tablet:text-desktop/subhead-l tablet:mb-4">
                {col.title}
              </div>
              {col.links.map((link, index) => {
                return <NavLink key={index} link={link} />;
              })}
            </div>
          );
        })}
      </div>
    </MenuSlide>
  );
};

const NestedMenuInfoHighlightsNavItem = ({
  label,
  subMenuItems,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedSubMenuItemIndex, setSelectedSubMenuItemIndex] = useState<
    number | null
  >(null);
  const selectedSubMenuItem =
    selectedSubMenuItemIndex !== null
      ? subMenuItems[selectedSubMenuItemIndex]
      : null;

  useEffect(() => {
    onSubMenuOverlayToggled(isMenuOpen);
  }, [isMenuOpen, onSubMenuOverlayToggled]);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(true);
  }, [setIsMenuOpen]);

  const handleBackNavClick = useCallback(() => {
    if (selectedSubMenuItem !== null) {
      return setSelectedSubMenuItemIndex(null);
    }
    setIsMenuOpen(false);
  }, [selectedSubMenuItem, setIsMenuOpen, setSelectedSubMenuItemIndex]);

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuClick}
        variant="bare"
        size="bare"
        className="w-full"
      >
        <MenuLabel label={label} isArrowEnabled />
      </Button>
      <div
        className={cn(
          'absolute w-full h-full bg-white pointer-events-none opacity-0 translate-x-[10%] flex flex-col z-[1] pt-[30px] left-0 top-0 px-5 tablet:px-10',
          'transition-[opacity,transform]',
          isMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : null,
        )}
      >
        <BackNav onClick={handleBackNavClick} />
        <div className="h-full relative">
          <SubNav>
            {subMenuItems.map((item, index) => {
              return (
                <SubNavItem
                  key={item.label}
                  label={item.label}
                  onClick={() => setSelectedSubMenuItemIndex(index)}
                />
              );
            })}
          </SubNav>
          <MenuSlide isVisible={selectedSubMenuItem !== null}>
            {selectedSubMenuItem?.type === 'INFO_HIGHLIGHTS' ? (
              <InfoHighlights
                isMenuOpen={isMenuOpen}
                {...selectedSubMenuItem}
              />
            ) : selectedSubMenuItem?.type === 'LINKS_COLUMN' ? (
              <LinkColumns isMenuOpen={isMenuOpen} {...selectedSubMenuItem} />
            ) : null}
          </MenuSlide>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NestedMenuInfoHighlightsNavItem;
