import React from 'react';
import { VerticalHighlightCard } from '../components/Menu/components/MenuItem/VerticalHighlightCard';
import { HighlightSection, LinksHighlightsSubNavItem } from '../types';
import { NavLink } from './NavLink';

const HighLightCardSection = ({ title, cards }: HighlightSection) => {
  return (
    <div className="desktop-sm:px-10 py-10 desktop-sm:border-l border-l-baseBlack/10">
      <div className="tablet:text-tablet/heading-5 desktop-lg:text-desktop/heading-6 mb-6">
        {title}
      </div>

      <div className="flex max-tablet:flex-col gap-10">
        {cards.map(highlight => {
          return (
            <VerticalHighlightCard
              key={highlight.title}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
};

export const LinksHighlightsContent = ({
  item,
}: {
  item: LinksHighlightsSubNavItem;
}) => {
  return (
    <div className="desktop-sm:max-h-[calc(100vh_-_var(--header-height)_-_20px)] desktop-sm:overflow-auto">
      <div className="flex max-desktop-sm:flex-col">
        <div className="flex flex-col pt-3 desktop-sm:pt-10 desktop-sm:gap-6 desktop-sm:px-10">
          {item.links.map(link => {
            return (
              <NavLink
                key={link.title}
                link={link}
                titleClassName="border-b border-b-baseBlack/10 py-6 text-desktop/subhead-l tablet:pt-10 tablet:pb-8 tablet:text-desktop/subhead-xl desktop-sm:py-0 desktop-sm:border-none desktop-sm:text-desktop/subhead-s desktop-lg:text-desktop/subhead-m font-var-all-small-caps min-w-max"
              />
            );
          })}
        </div>
        <div className="hidden tablet:flex max-desktop-sm:gap-10 desktop-sm:flex-col desktop-lg:flex-row">
          {item.highlights
            ? item.highlights.map((section, index) => {
                return <HighLightCardSection key={index} {...section} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};
