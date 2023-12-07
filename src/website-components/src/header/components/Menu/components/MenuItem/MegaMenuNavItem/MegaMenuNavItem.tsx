import { isSubMenuItemSection } from '../../../helpers';
import React, { useState } from 'react';
import { MegaMenuNavItem as MegaMenuNavItemProps } from '../../../../../types';
import MegaMenuContent from '../../../../MegaMenuContent';
import { DropdownMenuTrigger } from '../../DropdownMenuTrigger';
import MenuDropdownContainer from '../../MenuDropdownContainer';
import { SubNav, SubNavLinkSection, SubNavTriggerSection } from '../../SubNav';
import { SubNavContent } from '../../SubNavContent';
import { SubNavContentItem } from '../../SubNavContentItem';

type Props = MegaMenuNavItemProps & {
  isHovered: boolean;
};

export function NavBody(props: Props): React.ReactElement {
  const { label, isHovered, sections } = props;
  const subMenuSubNavSections = sections.filter(isSubMenuItemSection);
  const [activeSubNavItemLabel, setActiveSubNavItemLabel] = useState(
    sections.filter(isSubMenuItemSection)[0].items[0].label,
  );

  return (
    <MenuDropdownContainer
      isActive={isHovered}
      label={label}
      outerContainerClassname="w-full"
    >
      <div className="w-full bg-white border-t border-t-menuBorder flex">
        <SubNav>
          {sections.map((section, index) => {
            return section.type === 'LINK' ? (
              <SubNavLinkSection
                title={section.title}
                items={section.items}
                isTopSeparatorEnabled={index !== 0}
              />
            ) : (
              <SubNavTriggerSection
                title={section.title}
                items={section.items}
                activeSubNavItemLabel={activeSubNavItemLabel}
                onItemClick={setActiveSubNavItemLabel}
                isTopSeparatorEnabled={index !== 0}
              />
            );
          })}
        </SubNav>
        <SubNavContent>
          {subMenuSubNavSections
            .flatMap(section => section.items)
            .map(item => {
              const isItemActive = item.label === activeSubNavItemLabel;
              return (
                <SubNavContentItem key={item.label} isItemActive={isItemActive}>
                  <MegaMenuContent variant="DESKTOP" item={item} />
                </SubNavContentItem>
              );
            })}
        </SubNavContent>
      </div>
    </MenuDropdownContainer>
  );
}

const MegaMenuNavItem = (props: Props) => {
  const { isHovered } = props;

  return (
    <DropdownMenuTrigger label={props.label} isHovered={isHovered}>
      <NavBody {...props} />
    </DropdownMenuTrigger>
  );
};

export default MegaMenuNavItem;
