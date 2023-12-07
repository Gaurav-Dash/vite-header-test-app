import React from 'react';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import { Props } from '../types';
import Icon from '../../Icon';

export const LinkBar = ({
  infoLinks,
  copyrightText,
  mainLogoCta,
}: Pick<Props, 'infoLinks' | 'copyrightText' | 'mainLogoCta'>) => {
  return (
    <section className="flex flex-col pt-20 text-[#BCBCBC] tablet:flex-row tablet:justify-between tablet:items-center tablet:pt-7 desktop-sm:pt-8">
      <div className="tablet:basis-[30%] desktop-sm:basis-[10%]">
        <CTAComponent {...mainLogoCta}>
          <Icon icon="sprinklrFullLogoDark" className="h-6 mb-10 tablet:mb-0" />
        </CTAComponent>
      </div>

      <div className="flex flex-col gap-y-4 tablet:flex-row tablet:gap-x-[28px] desktop-sm:gap-x-5 desktop-lg:gap-x-8">
        {infoLinks.map(link => {
          return (
            <CTAComponent key={link.label} {...link}>
              <span className="text-mobile/body-s tablet:text-mobile/body-xs desktop-sm:whitespace-nowrap hover:underline">
                {link.label}
              </span>
            </CTAComponent>
          );
        })}
        <span className="text-mobile/body-s tablet:text-mobile/body-xs">
          {copyrightText}
        </span>
      </div>
    </section>
  );
};
