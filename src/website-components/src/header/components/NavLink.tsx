import React from 'react';
import { LinkItem } from '../types';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';
import { cn } from '../../tailwind';

export const NavLink = ({
  link,
  titleClassName,
  descClassname,
}: {
  link: LinkItem;
  titleClassName?: string;
  descClassname?: string;
}) => {
  return (
    <CTAComponent {...link.cta}>
      <div className="group">
        <span
          className={cn(
            'block tablet:text-tablet/heading-5 text-desktop/heading-6 group-hover:text-primaryOceanBlue',
            titleClassName,
          )}
        >
          {link.title}
        </span>
        <span className={cn('block text-desktop/body-s mt-1', descClassname)}>
          {link.description}
        </span>
      </div>
    </CTAComponent>
  );
};
