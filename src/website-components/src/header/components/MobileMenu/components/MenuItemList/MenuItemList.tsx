import React from 'react';
import { NavItem } from '../../../../types';
import MenuItem from '../MenuItem';

function MenuItemList({
  navItems,
  onSubMenuOverlayToggled,
}: {
  navItems?: NavItem[];
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
}) {
  return (
    <div className="px-5 tablet:px-10">
      {navItems?.map(item => {
        return (
          <div key={item.label} className="border-b border-b-baseBlack/10">
            <MenuItem
              key={`${item.label}_menuItem`}
              onSubMenuOverlayToggled={onSubMenuOverlayToggled}
              {...item}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MenuItemList;
