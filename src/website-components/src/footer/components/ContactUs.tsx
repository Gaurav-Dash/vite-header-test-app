import React from 'react';
import { Button } from '../../button';
import { CTAComponent } from '../../ExternalComponent/ExternalComponent';

import { Cta } from '../../types';

export const ContactUs = ({ title, cta }: { title: string; cta: Cta }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 tablet:items-start">
      <p className="text-mobile/heading-3 tablet:text-tablet/heading-5 desktop-sm:text-desktop/heading-6">
        {title}
      </p>
      <CTAComponent {...cta}>
        <Button>{cta.label}</Button>
      </CTAComponent>
    </div>
  );
};
