import React from 'react';

import Desktop from './variants/Desktop';
import Mobile from './variants/Mobile';
import { LanguageSelectorProps } from './types';

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const { variant } = props;

  return variant === 'MOBILE' ? <Mobile {...props} /> : <Desktop {...props} />;
};
