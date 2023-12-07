import React from 'react';
import Icon from '../../Icon';
import LanguageSelector from '../../languageSelector';
import { Button } from '../../button';
import Menu from '../components/Menu';
import MenuLabel from '../components/Menu/components/MenuLabel';
import { LayoutProps } from '../types';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import { HeaderIconConditionalWrapper } from '../components/HeaderIconConditionalWrapper';
import { FirstRowWrapper } from '../components/FirstRowWrapper';

const Desktop = ({
  navItems,
  mainLogoCta,
  primaryCta,
  loginCta,
  supportCta,
  secondaryCta,
  auxCta,
  languageSelector,
}: LayoutProps) => {
  return (
    <div className="w-full relative px-5 py-[24px] desktop-sm:px-10 bg-white transition-[top] duration-200">
      <FirstRowWrapper>
        <div className=" w-full flex justify-end items-center gap-8 desktop-lg:gap-10 pb-6">
          {loginCta ? (
            <CTAComponent {...loginCta}>
              <MenuLabel
                variant="SECONDARY"
                label={loginCta.label}
                icon={loginCta.icon}
              />
            </CTAComponent>
          ) : null}
          {supportCta ? (
            <CTAComponent {...supportCta}>
              <MenuLabel
                variant="SECONDARY"
                label={supportCta.label}
                icon={supportCta.icon}
              />
            </CTAComponent>
          ) : null}
          {languageSelector && languageSelector.translations.length > 1 ? (
            <LanguageSelector
              containerClassName="leading-none"
              variant="HEADER"
              translations={languageSelector.translations}
              activeLocale={languageSelector.activeLocale}
            />
          ) : null}
        </div>
      </FirstRowWrapper>
      <div className="w-full flex items-center gap-10 desktop-lg:gap-[100px]">
        <CTAComponent {...mainLogoCta}>
          <HeaderIconConditionalWrapper
            expandedIcon={
              <Icon
                icon="sprinklrFullLogo"
                alt="Sprinklr Logo"
                className="desktop-sm:h-[34px] desktop-lg:h-[52px] shrink-0"
              />
            }
            collapsedIcon={
              <Icon
                icon="sprinklrBurst"
                alt="Sprinklr Logo"
                className="desktop-sm:h-[34px] desktop-lg:h-[52px] shrink-0"
              />
            }
          />
        </CTAComponent>
        <div className="flex-none">
          <Menu items={navItems} />
        </div>
        <div className="flex justify-end flex-1 items-center gap-6 desktop-lg:gap-10">
          {secondaryCta ? (
            <CTAComponent {...secondaryCta}>
              <MenuLabel label={secondaryCta.label} icon={secondaryCta.icon} />
            </CTAComponent>
          ) : null}
          {auxCta ? (
            <CTAComponent {...auxCta}>
              <MenuLabel label={auxCta.label} icon={auxCta.icon} />
            </CTAComponent>
          ) : null}

          {primaryCta ? (
            <CTAComponent {...primaryCta}>
              <Button variant="primary">{primaryCta.label}</Button>
            </CTAComponent>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
