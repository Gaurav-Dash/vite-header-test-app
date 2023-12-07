'use client';
import React, { useState } from 'react';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '../../hover-card';
import { cn } from '../../tailwind';
import { LanguageSelectorProps } from '../types';
import Icon from '../../Icon';
import { languageMap } from '../languageMapping';
import { LANGUAGE_CONFIG } from '../constants';

const DEFAULT_PADDING = {
  left: 12,
  right: 12,
};

const isValidLocale = (
  locale: string,
): locale is (typeof LANGUAGE_CONFIG)[number]['locale'] => {
  return LANGUAGE_CONFIG.map(config => config.locale).includes(locale as any);
};

const Desktop = ({
  activeLocale,
  translations,
  children,
  isDark = false,
  variant = 'FOOTER',
  containerClassName,
}: LanguageSelectorProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const filteredLanguageConfigs = LANGUAGE_CONFIG.filter(config =>
    translations.map(translation => translation.locale).includes(config.locale),
  );
  const activeLangLabel =
    (activeLocale &&
      isValidLocale(activeLocale) &&
      languageMap[activeLocale]?.label) ||
    'LANGUAGE';
  return (
    <div className={cn(isDark ? 'dark' : '', containerClassName)}>
      <HoverCard
        open={isMenuExpanded}
        onOpenChange={setIsMenuExpanded}
        openDelay={0}
      >
        <HoverCardTrigger
          asChild
          onTouchEnd={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          {children ? (
            children
          ) : (
            <div
              className={cn(
                'font-var-all-small-caps cursor-pointer flex items-center',
                variant === 'HEADER'
                  ? 'text-desktop/subhead-s text-[#646470]'
                  : 'text-desktop/subhead-m',
              )}
            >
              <span>{activeLangLabel}</span>
              <Icon
                icon="chevron"
                className={cn(
                  'inline-block ms-2 duration-75 h-3.5',
                  isDark ? 'fill-white' : 'fill-black',
                  isMenuExpanded && 'rotate-180',
                )}
              />
            </div>
          )}
        </HoverCardTrigger>
        <HoverCardContent
          collisionPadding={DEFAULT_PADDING}
          sideOffset={16}
          className="px-0 py-5 w-52 bg-white dark:bg-primarySpaceGrey overflow-hidden"
        >
          <ul className="w-full flex flex-col">
            {filteredLanguageConfigs.map(({ locale, lang }) => {
              const languageData = languageMap[locale];
              const { cta } = translations.find(
                translation => translation.locale === locale,
              )!;

              if (!languageData) {
                return null;
              }

              const { label, imageUrl } = languageData;
              return (
                <li key={lang} className="block">
                  <CTAComponent {...cta}>
                    <div className="flex items-center px-[32px] m-0 gap-[12px] h-[56px] w-full hover:bg-muteBackground dark:hover:bg-secondarySlateBlue px-auto">
                      <img src={imageUrl} alt={label} width={22} height={16} />
                      <div className="text-base font-bold">{label}</div>
                    </div>
                  </CTAComponent>
                </li>
              );
            })}
          </ul>
          <HoverCardArrow className="h-[20px] w-[20px] block absolute fill-white bg-white dark:bg-primarySpaceGrey dark:fill-primarySpaceGrey transform rotate-[225deg] -translate-x-1/2 left-3/4 top-[-10px] shadow-tooltip" />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Desktop;
