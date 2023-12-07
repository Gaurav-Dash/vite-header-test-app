import React from 'react';
import {
  CTAComponent,
  ImageComponent,
} from '../../ExternalComponent/ExternalComponent';
import { cn } from '../../tailwind';
import TextLink from '../../TextLink';
import Icon, { IconType } from '../../Icon';
import { NavLink } from './NavLink';
import { VerticalHighlightCard } from './Menu/components/MenuItem/VerticalHighlightCard';
import Text from './text';

import { HighlightItem, MegaMenuSubNavMenuItem } from '../types';
import { Cta } from '../../types';
export const HorizontalHighlightBox = ({
  description,
  image,
  cta,
}: HighlightItem) => {
  return (
    <div className="flex gap-5 max-tablet:hidden">
      <div className="w-[140px] relative">
        <ImageComponent
          imageData={image}
          imageClassName="h-full object-contain w-full absolute"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 h-fit">
        <p className="text-[16px] leading-[1.1] font-semibold">{description}</p>
        <CTAComponent {...cta}>
          <TextLink label={cta.label} />
        </CTAComponent>
      </div>
    </div>
  );
};

const InfoBox = ({
  icon,
  title,
  description,
  overviewCta,
}: {
  icon?: IconType;
  title: string;
  description: string;
  overviewCta?: Cta;
}) => {
  return (
    <div>
      <p className="flex items-center">
        {icon ? <Icon icon={icon} className="h-5 flex-none me-3" /> : null}
        <span className="inline text-desktop/heading-5">{title}</span>
      </p>
      <Text
        as="p"
        className="text-tablet/heading-5 tablet:text-tablet/heading-2 desktop-sm:text-tablet/heading-4 desktop-lg:text-desktop/heading-3 mt-4 tablet:mt-6 desktop-sm:mt-4 desktop-lg:mt-6"
      >
        {description}
      </Text>
      {overviewCta ? (
        <div className="mt-8">
          <CTAComponent {...overviewCta}>
            <TextLink label={overviewCta.label} />
          </CTAComponent>
        </div>
      ) : null}
    </div>
  );
};

const MegaMenuContentDesktop = ({ item }: { item: MegaMenuSubNavMenuItem }) => {
  const { auxLinkGroupTitle, auxLinkGroupLinks } = item;
  const isAuxLinkGroupShown = auxLinkGroupTitle && auxLinkGroupLinks;
  return (
    <div className="h-[calc(100vh_-_var(--header-height)_-_20px)] overflow-auto">
      <div className="h-full flex desktop-sm:ps-8 desktop-sm:pe-[104px] desktop-lg:ps-10">
        <div className="flex flex-col flex-none tablet:w-1/3 max-w-[360px] desktop-sm:pe-8 desktop-sm:py-10 desktop-lg:pe-10 desktop-lg:py-11">
          <InfoBox
            icon={item.titleIcon}
            title={item.title}
            description={item.description}
            overviewCta={item.overviewCta}
          />
          <div className="tablet:max-desktop-sm:hidden h-2 bg-gradient-1 my-8 desktop-sm:my-12 rounded-full" />
          {item.highlight ? (
            <div className="desktop-lg:max-w-[240px]">
              <VerticalHighlightCard highlight={item.highlight} />
            </div>
          ) : null}
        </div>
        <div
          className={cn(
            'h-full grid auto-rows-max gap-x-16 gap-y-6 flex-1 grid-cols-[repeat(1,_minmax(auto,_382px))] border-s border-s-[#DCD7D7] desktop-sm:px-8 desktop-sm:py-10 desktop-lg:px-10 desktop-lg:py-11',
            isAuxLinkGroupShown
              ? ''
              : 'tablet:grid-cols-[repeat(2,_minmax(auto,_382px))]',
          )}
        >
          {item.links?.map(link => {
            return <NavLink key={link.title} link={link} />;
          })}
        </div>
        {isAuxLinkGroupShown ? (
          <div
            className={cn(
              'h-full grid auto-rows-max gap-y-6 flex-1 max-tablet:mt-10 border-s border-s-[#DCD7D7] desktop-sm:px-8 desktop-sm:py-10 desktop-lg:px-10 desktop-lg:py-11',
            )}
          >
            <p className="text-davyGray text-desktop/subhead-s font-var-all-small-caps mb-2">
              {auxLinkGroupTitle}
            </p>
            {auxLinkGroupLinks.map(link => {
              return <NavLink key={link.title} link={link} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const MegaMenuContentMobile = ({
  item,
}: {
  item: MegaMenuSubNavMenuItem;
}) => {
  const { auxLinkGroupTitle, auxLinkGroupLinks } = item;
  const isAuxLinkGroupShown = auxLinkGroupTitle && auxLinkGroupLinks;
  return (
    <div className="flex flex-col">
      <div className="py-10 tablet:pb-14">
        <InfoBox
          icon={item.titleIcon}
          title={item.title}
          description={item.description}
          overviewCta={item.overviewCta}
        />
      </div>
      <div className="flex flex-col flex-none tablet:order-1">
        <div className="h-1.5 bg-gradient-1 rounded-full mb-10" />
        {item.highlight ? (
          <div className="desktop-lg:max-w-[240px] hidden tablet:block">
            <div className="w-full flex gap-10 mb-10">
              <div className="relative basis-1/5 h-[108px]">
                <ImageComponent
                  imageData={item.highlight.image}
                  imageClassName="object-cover absolute w-full h-full"
                />
              </div>
              <div>
                <p className="text-tablet/heading-5 mb-[45px]">
                  {item.highlight.description}
                </p>
                <CTAComponent {...item.highlight.cta}>
                  <TextLink size="sm" label={item.highlight.cta.label} />
                </CTAComponent>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={cn(
          'grid auto-rows-max gap-x-16 gap-y-6 grid-cols-[repeat(1,_minmax(auto,_382px))] tablet:grid-cols-[repeat(2,_minmax(auto,_382px))] py-11 border-b tablet:border-y border-y-baseBlack/10',
        )}
      >
        {item.links?.map(link => {
          return <NavLink key={link.title} link={link} />;
        })}
      </div>
      {isAuxLinkGroupShown ? (
        <div
          className={cn('grid grid-cols-1 auto-rows-max my-10 tablet:mb-20')}
        >
          <p className="text-davyGray text-desktop/subhead-s font-var-all-small-caps mb-10">
            {auxLinkGroupTitle}
          </p>
          <div className="grid auto-rows-max grid-cols-[repeat(1,_minmax(auto,_382px))] gap-x-16 gap-y-6 tablet:grid-cols-[repeat(2,_minmax(auto,_382px))]">
            {auxLinkGroupLinks.map(link => {
              return <NavLink key={link.title} link={link} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const MegaMenuContent = ({
  item,
  variant = 'DESKTOP',
}: {
  item: MegaMenuSubNavMenuItem;
  variant?: 'MOBILE' | 'DESKTOP';
}) => {
  return variant === 'MOBILE' ? (
    <MegaMenuContentMobile item={item} />
  ) : (
    <MegaMenuContentDesktop item={item} />
  );
};

export default MegaMenuContent;
