import React, { useState } from 'react';
import { SubNavContent } from '../../SubNavContent';
import { SubNavContentItem } from '../../SubNavContentItem';
import { InfoHighlightsNavItem as InfoHighlightsNavItemProps } from '../../../../../types';
import { InfoHighlightsContent } from '../../../../InfoHighlightsContent';
import { DropdownMenuTrigger } from '../../DropdownMenuTrigger';
import MenuDropdownContainer from '../../MenuDropdownContainer';
import { SubNav, SubNavTriggerSection } from '../../SubNav';

export type Props = InfoHighlightsNavItemProps & {
  isHovered: boolean;
};

export function NavBody(props: Props): React.ReactElement {
  const { label, isHovered, subNavItems } = props;
  const [activeSubNavItemLabel, setActiveSubNavItemLabel] = useState(
    subNavItems[0].label,
  );

  return (
    <MenuDropdownContainer
      isActive={isHovered}
      label={label}
      outerContainerClassname="w-full"
    >
      <div className="w-full bg-white border-t border-t-menuBorder flex">
        <SubNav>
          <SubNavTriggerSection
            items={subNavItems}
            activeSubNavItemLabel={activeSubNavItemLabel}
            onItemClick={setActiveSubNavItemLabel}
          />
        </SubNav>
        <SubNavContent>
          {subNavItems.map(item => {
            const isItemActive = item.label === activeSubNavItemLabel;
            return (
              <SubNavContentItem key={item.label} isItemActive={isItemActive}>
                <InfoHighlightsContent item={item} />
              </SubNavContentItem>
            );
          })}
        </SubNavContent>
      </div>
    </MenuDropdownContainer>
  );
}

const InfoHighlightsNavItem = (props: Props) => {
  const { isHovered } = props;

  return (
    <DropdownMenuTrigger label={props.label} isHovered={isHovered}>
      <NavBody {...props} />
    </DropdownMenuTrigger>
  );
};

export default InfoHighlightsNavItem;
