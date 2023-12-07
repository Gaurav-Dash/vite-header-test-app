import React from 'react';
import Desktop from './layouts/Desktop';
import Mobile from './layouts/Mobile';
import { Props } from './types';
import { HeightObserver } from './HeightObserver';
import { ExternalComponentContextProvider } from '../ExternalComponent/ExternalComponent';

const Header = (props: Props) => {
  const { CTAComponent, ImageComponent, ...resolvedProps } = props;
  return (
    <ExternalComponentContextProvider
      value={{
        CTAComponent,
        ImageComponent,
      }}
    >
      <HeightObserver className="sticky top-0 z-30">
        <div className="desktop-sm:hidden">
          <Mobile {...resolvedProps} />
        </div>
        <div className="hidden desktop-sm:block">
          <Desktop {...resolvedProps} />
        </div>
      </HeightObserver>
    </ExternalComponentContextProvider>
  );
};

export default Header;
