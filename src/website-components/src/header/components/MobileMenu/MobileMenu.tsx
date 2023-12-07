'use client';
import React, { CSSProperties, useCallback, useMemo, useState } from 'react';
import { useMedia } from 'react-use';
import { CTAComponent } from '../../../ExternalComponent/ExternalComponent';
import { LayoutProps } from '../../types';
import MenuItemList from './components/MenuItemList';
import { useInnerHeight } from './useInnerHeight';
import LanguageSelector from '../../../languageSelector';
import MenuLabel from './components/MenuLabel';
import { BREAKPOINTS } from '../../../constants';

const MobileMenu = ({
  navItems,
  loginCta,
  secondaryCta,
  auxCta,
  supportCta,
  languageSelector,
}: LayoutProps) => {
  const [isMenuScrollDisabled, setIsMenuScrollDisabled] = useState(false);
  const handleSubMenuOverlayToggled = useCallback(
    (isSubMenuOverlayOpen: boolean) =>
      setIsMenuScrollDisabled(isSubMenuOverlayOpen),
    [setIsMenuScrollDisabled],
  );
  const isTablet = useMedia(`(min-width : ${BREAKPOINTS.tablet})`);
  const { innerHeight } = useInnerHeight();

  const overlayStyles = useMemo<CSSProperties>(
    () => ({
      ['--fullscreen-menu-height' as string]: `calc(${innerHeight}px - 100%)`,
    }),
    [innerHeight],
  );

  const secondaryCTAs = isTablet
    ? [loginCta, auxCta, supportCta]
    : [loginCta, auxCta];

  return (
    <div
      className={
        'overflow-y-auto absolute overflow-x-clip w-full bg-white h-[--fullscreen-menu-height] min-h-fit tablet:border-t tablet:border-t-baseBlack/10 tablet:shadow-menu'
      }
      style={overlayStyles}
    >
      <div
        className="relative h-[90%] w-full flex overflow-x-clip flex-col max-tablet:border-t max-tablet:border-t-baseBlack/10"
        style={{
          overflowY: isMenuScrollDisabled ? 'hidden' : 'auto',
        }}
      >
        <MenuItemList
          navItems={navItems}
          onSubMenuOverlayToggled={handleSubMenuOverlayToggled}
        />
        {secondaryCta ? (
          <div className="border-b border-b-baseBlack/10 mx-5 tablet:mx-10">
            <CTAComponent {...secondaryCta}>
              <MenuLabel label={secondaryCta?.label} />
            </CTAComponent>
          </div>
        ) : null}

        {!isTablet && supportCta ? (
          <div className="mx-5 tablet:mx-10">
            <CTAComponent {...supportCta}>
              <MenuLabel label={supportCta?.label} />
            </CTAComponent>
          </div>
        ) : null}

        <div className="basis-full flex flex-col justify-end mx-5 tablet:mx-10 tablet:justify-start">
          {languageSelector && languageSelector.translations.length > 1 ? (
            <LanguageSelector variant="MOBILE" {...languageSelector} />
          ) : null}
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-5 pt-6 pb-10 border-t border-t-baseBlack/10 tablet:pt-10 tablet:px-10">
        {secondaryCTAs.map(cta => {
          return cta ? (
            <CTAComponent {...cta}>
              <span className="text-desktop/subhead-m font-var-all-small-caps">
                {cta.label}
              </span>
            </CTAComponent>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
