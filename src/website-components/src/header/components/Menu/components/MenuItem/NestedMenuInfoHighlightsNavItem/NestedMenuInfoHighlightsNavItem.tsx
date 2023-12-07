import { InfoHighlightsContent } from '../../../../InfoHighlightsContent';
import { SubNavContent } from '../../../../Menu/components/SubNavContent';
import { SubNavContentItem } from '../../../../Menu/components/SubNavContentItem';
import {
  InfoHighlightsNavItem,
  LinkColumnsSubNavItem,
  NestedMenuInfoHighlightsNavItem as NestedMenuInfoHighlightsNavItemProps,
} from '../../../../../types';
import React, { Fragment, useCallback, useState } from 'react';
import { DropdownMenuTrigger } from '../../DropdownMenuTrigger';
import MenuDropdownContainer from '../../MenuDropdownContainer';
import { SubNav, SubNavTriggerSection } from '../../SubNav';
import { NavLink } from '../../../../NavLink';

type Props = NestedMenuInfoHighlightsNavItemProps & {
  isHovered: boolean;
};

const InfoHighlights = (props: InfoHighlightsNavItem) => {
  const { subNavItems } = props;
  const [activeSubNavItemLabel, setActiveSubNavItemLabel] = useState(
    subNavItems[0].label,
  );
  return (
    <Fragment>
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
    </Fragment>
  );
};

const LinkColumns = (props: LinkColumnsSubNavItem) => {
  const { columns } = props;
  return (
    <SubNavContent>
      <div className="flex gap-10 m-10">
        {columns.map((col, index) => {
          return (
            <div key={index} className="flex flex-col gap-8">
              <div className="text-desktop/subhead-s text-davyGray font-var-all-small-caps">
                {col.title}
              </div>
              {col.links.map((link, index) => {
                return <NavLink key={index} link={link} />;
              })}
            </div>
          );
        })}
      </div>
    </SubNavContent>
  );
};

export function NavBody(props: Props): React.ReactElement {
  const { isHovered, label, subMenuItems } = props;
  const [activeSubMenuItem, setActiveSubMenuItem] = useState(0);

  const handleSubMenuItemClick = useCallback(
    (label: string) => {
      const searchIndex = subMenuItems.findIndex(
        subMenuItem => subMenuItem.label === label,
      );
      const index = Math.max(0, searchIndex);
      setActiveSubMenuItem(index);
    },
    [subMenuItems],
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
            items={subMenuItems}
            activeSubNavItemLabel={subMenuItems[activeSubMenuItem].label}
            onItemClick={handleSubMenuItemClick}
          />
        </SubNav>
        {subMenuItems[activeSubMenuItem].type === 'INFO_HIGHLIGHTS' ? (
          <InfoHighlights
            {...(subMenuItems[activeSubMenuItem] as InfoHighlightsNavItem)}
          />
        ) : (
          <LinkColumns
            {...(subMenuItems[activeSubMenuItem] as LinkColumnsSubNavItem)}
          />
        )}
      </div>
    </MenuDropdownContainer>
  );
}

const NestedMenuInfoHighlightsNavItem = (props: Props) => {
  const { isHovered } = props;

  return (
    <DropdownMenuTrigger label={props.label} isHovered={isHovered}>
      <NavBody {...props} />
    </DropdownMenuTrigger>
  );
};

export default NestedMenuInfoHighlightsNavItem;
