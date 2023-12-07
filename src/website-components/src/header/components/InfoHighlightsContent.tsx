import React from 'react';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import { InfoHighlightsSubNavItem } from '../types';
import TextLink from '../../TextLink';
import { Cta } from '../../types';
import { VerticalHighlightCard } from './Menu/components/MenuItem/VerticalHighlightCard';

const InfoBox = ({
  title,
  description,
  overviewCta,
}: {
  title: string;
  description: string;
  overviewCta?: Cta;
}) => {
  return (
    <div className="flex flex-col tablet:w-1/3">
      <p className="text-mobile/heading-3 desktop-sm:text-desktop/heading-3">
        {title}
      </p>
      <p className="max-desktop-sm:hidden text-desktop/body-m mt-10">
        {description}
      </p>
      {overviewCta ? (
        <div className="mt-8">
          <CTAComponent {...overviewCta}>
            <TextLink label={overviewCta.label} />
          </CTAComponent>
        </div>
      ) : null}
      <div className="h-2.5 mt-8 bg-gradient-1" />
    </div>
  );
};
export const InfoHighlightsContent = ({
  item,
}: {
  item: InfoHighlightsSubNavItem;
}) => {
  return (
    <div className="desktop-sm:max-h-[calc(100vh_-_var(--header-height)_-_20px)] desktop-sm:overflow-auto">
      <div className="flex max-tablet:flex-col gap-x-10 gap-y-16 desktop-sm:px-10 py-10">
        <InfoBox
          title={item.title}
          description={item.description}
          overviewCta={item.overviewCta}
        />
        <div className="flex max-tablet:flex-col gap-10">
          {item?.highlights && item.highlights.length > 0
            ? item.highlights.map(highlight => {
                return (
                  <VerticalHighlightCard
                    key={highlight.title}
                    highlight={highlight}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
