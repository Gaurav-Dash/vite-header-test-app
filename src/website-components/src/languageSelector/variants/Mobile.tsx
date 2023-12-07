'use client';
import React, { useCallback, useState } from 'react';
import { LanguageSelectorProps } from '../types';
import { LANGUAGE_CONFIG } from '../constants';
import { Button } from '../../button';
import MenuLabel from '../../header/components/MobileMenu/components/MenuLabel';
import { Overlay, OverlayNavItem } from '../components/Overlay';
import { languageMap } from '../languageMapping';

const isValidLocale = (
  locale: string,
): locale is (typeof LANGUAGE_CONFIG)[number]['locale'] => {
  return LANGUAGE_CONFIG.map(config => config.locale).includes(locale as any);
};

const MobileLanguageSelector = ({
  activeLocale,
  translations,
}: LanguageSelectorProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState<
    number | null
  >(null);

  const filteredLanguageConfigs = LANGUAGE_CONFIG.filter(config =>
    translations.map(translation => translation.locale).includes(config.locale),
  );

  const navItems = filteredLanguageConfigs
    .map<OverlayNavItem | null>(({ locale }) => {
      const languageData = languageMap[locale];
      const { cta } = translations.find(
        translation => translation.locale === locale,
      )!;

      if (!languageData) {
        return null;
      }

      return { cta, label: languageData.label, isArrowEnabled: false };
    })
    .filter((item): item is OverlayNavItem => item !== null);

  const selectedNavItem =
    selectedNavItemIndex !== null ? navItems[selectedNavItemIndex] : null;

  const updateMenuOpenState = useCallback((isNavOpen: boolean) => {
    setIsNavOpen(isNavOpen);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    updateMenuOpenState(true);
  }, [updateMenuOpenState]);

  const handleBackNavClick = useCallback(() => {
    if (selectedNavItemIndex != null) {
      return setSelectedNavItemIndex(null);
    }
    updateMenuOpenState(false);
  }, [updateMenuOpenState, selectedNavItemIndex]);

  const activeLangLabel =
    (activeLocale &&
      isValidLocale(activeLocale) &&
      languageMap[activeLocale]?.label) ||
    'LANGUAGE';

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuItemClick}
        variant="bare"
        size="bare"
        className="w-full"
      >
        <MenuLabel
          className="text-cometBlack tablet:text-baseBlack"
          label={activeLangLabel}
          isArrowEnabled
        />
      </Button>
      <Overlay
        isNavOpen={isNavOpen}
        isContentSlideOpen={selectedNavItem !== null}
        onBackNavClick={handleBackNavClick}
        onSubNavItemClick={setSelectedNavItemIndex}
        navItems={navItems}
      />
    </React.Fragment>
  );
};

export default MobileLanguageSelector;
