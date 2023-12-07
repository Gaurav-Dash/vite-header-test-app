'use client';
import React, { useCallback, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { NavItem } from '../../types';
import MenuDropdownWrapper from './components/MenuDropdownWrapper/MenuDropdownWrapper';
import MenuItem from './components/MenuItem';

export type Props = {
  items: NavItem[];
};

const Menu = ({ items }: Props) => {
  const [activeMenuItemLabel, setActiveMenuItemLabel] = useState<string | null>(
    null,
  );

  const menuRef = useRef<HTMLUListElement>(null);

  useClickAway(
    menuRef,
    () => {
      setActiveMenuItemLabel(null);
    },
    ['mouseover'],
  );

  const handleHover = useCallback(
    (label: string) => {
      setActiveMenuItemLabel(label);
    },
    [setActiveMenuItemLabel],
  );

  return (
    <MenuDropdownWrapper activeMenuItemLabel={activeMenuItemLabel}>
      <ul className="flex h-full gap-6 desktop-lg:gap-10" ref={menuRef}>
        {items.map(item => {
          const isHovered = activeMenuItemLabel === item.label;
          return (
            <MenuItem
              key={item.label}
              {...item}
              isHovered={isHovered}
              onHover={handleHover}
            />
          );
        })}
      </ul>
    </MenuDropdownWrapper>
  );
};

export default React.memo(Menu);
