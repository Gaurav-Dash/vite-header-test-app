import React, { useState } from 'react';
import { LinksHighlightsNavItem as LinksHighlightsNavItemProps } from '../../../../../types';
import { DropdownMenuTrigger } from '../../DropdownMenuTrigger';
import MenuDropdownContainer from '../../MenuDropdownContainer';
import { SubNav, SubNavTriggerSection } from '../../SubNav';
import { SubNavContent } from '../../SubNavContent';
import { SubNavContentItem } from '../../SubNavContentItem';
import { LinksHighlightsContent } from '../../../../LinksHighlightsContent';

export type Props = LinksHighlightsNavItemProps & {
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
                <LinksHighlightsContent item={item} />
              </SubNavContentItem>
            );
          })}
        </SubNavContent>
      </div>
    </MenuDropdownContainer>
  );
}

const LinksHighlightsNavItem = (props: Props) => {
  const { isHovered } = props;

  return (
    <DropdownMenuTrigger label={props.label} isHovered={isHovered}>
      <NavBody {...props} />
    </DropdownMenuTrigger>
  );
};

export default LinksHighlightsNavItem;
