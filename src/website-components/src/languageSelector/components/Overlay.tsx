import React, { ReactNode } from 'react';
import { MenuSlide } from '../../header/components/MenuSlide';
import BackNav from '../../header/components/MobileMenu/components/BackNav';
import { Cta } from '../../types';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import MenuLabel from '../../header/components/MobileMenu/components/MenuLabel';

export type OverlayNavItem = {
  cta: Cta;
  label: string;
  isArrowEnabled?: boolean;
};

export const Overlay = ({
  isNavOpen,
  navItems,
  onBackNavClick,
}: {
  navItems: OverlayNavItem[];
  isNavOpen: boolean;
  onBackNavClick?: () => void;
  onSubNavItemClick: (index: number) => void;
  isContentSlideOpen?: boolean;
  children?: ReactNode;
}) => {
  return (
    <MenuSlide
      isVisible={isNavOpen}
      className="flex flex-col z-10 px-5 tablet:px-10"
    >
      {onBackNavClick ? <BackNav onClick={onBackNavClick} /> : null}
      <div className="h-full">
        {navItems.map((item, index) => {
          return (
            <div key={index} className="border-b border-b-baseBlack/10">
              <CTAComponent {...item.cta}>
                <MenuLabel
                  label={item.label}
                  isArrowEnabled={item.isArrowEnabled}
                />
              </CTAComponent>
            </div>
          );
        })}
      </div>
    </MenuSlide>
  );
};
