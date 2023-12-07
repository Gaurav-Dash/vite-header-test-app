import React from 'react';
import Icon from '../../Icon';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';

import { Props } from '../types';

export const SocialLinks = ({
  socialLinks,
}: {
  socialLinks: Props['socialLinks'];
}) => {
  return (
    <div
      className={`flex flex-wrap flex-shrink-0 gap-x-12 gap-y-6 py-8 px-[43px] mt-8 border-y border-cometBlack
                  tablet:px-0 tablet:mt-10 tablet:gap-x-6 tablet:gap-y-5 tablet:pt-10 tablet:border-b-0`}
    >
      {socialLinks.map(socialLink => {
        return (
          <CTAComponent key={socialLink.label} {...socialLink.cta}>
            <div className="bg-white h-10 flex-shrink-0 aspect-square rounded-full flex items-center justify-center">
              <Icon icon={socialLink.icon} className="fill-black h-3" />
            </div>
          </CTAComponent>
        );
      })}
    </div>
  );
};
