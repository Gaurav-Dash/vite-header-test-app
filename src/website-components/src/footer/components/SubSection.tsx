import React from 'react';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import { FooterSubSection } from '../types';
import { cn } from '../../tailwind';

export const SubSection = ({ title, links, className }: FooterSubSection) => {
  return (
    <div>
      <p
        className={cn(
          'text-desktop/subhead-xs text-white font-var-all-small-cap uppercase mb-5 tablet:mb-4',
          className,
        )}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-4 tablet:gap-y-2.5 text-[#BCBCBC]">
        {links.map(link => {
          return (
            <li key={link.label} className="block hover:underline">
              <CTAComponent {...link}>
                <span className="block text-mobile/body-s">{link.label}</span>
              </CTAComponent>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
