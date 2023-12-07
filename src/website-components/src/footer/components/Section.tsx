import React from 'react';
import { Props } from '../types';
import { SubSection } from './SubSection';
import { cn } from '../../tailwind';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';

export const Section = ({ links, subSections }: Props['sections'][number]) => {
  const isLinksAbsent = !links || links.length === 0;
  return (
    <div
      className={cn(
        'grid gap-5 text-[#BCBCBC] grid-cols-2 tablet:grid-cols-1 tablet:mt-4 tablet:gap-0',
        isLinksAbsent ? 'grid-cols-1 tablet:mt-8 desktop-sm:mt-6' : '',
      )}
    >
      {links?.length ? (
        <ul className="flex flex-col gap-y-5 tablet:gap-y-2.5">
          {links.map(link => (
            <li
              key={link.label}
              className="block text-mobile/body-s hover:underline"
            >
              <CTAComponent {...link}>{link.label}</CTAComponent>
            </li>
          ))}
        </ul>
      ) : null}
      {subSections ? (
        <div
          className={cn(
            'flex flex-col gap-10 tablet:flex-col tablet:gap-y-8',
            isLinksAbsent ? 'flex-row' : 'tablet:mt-8',
          )}
        >
          {subSections.map(subSection => {
            return (
              <SubSection
                key={subSection.title}
                {...subSection}
                className={
                  links && subSections?.length >= 2
                    ? 'tablet:text-desktop/heading-6 tablet:normal-case'
                    : 'tablet:text-desktop/subhead-s'
                }
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
