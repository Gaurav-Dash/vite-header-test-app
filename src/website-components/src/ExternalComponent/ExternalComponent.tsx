import { Cta } from '../types';
import React, { createContext, useContext } from 'react';

type CTAComponentType = (
  props: Cta & {
    children: React.ReactNode;
  },
) => React.ReactElement;
type ImageComponentType = (props: {
  imageData: any;
  imageClassName?: string;
}) => React.ReactElement | null;

const defaultCTAComponent = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const defaultImageComponent = () => null;

type ExternalComponentContext = {
  CTAComponent: CTAComponentType;
  ImageComponent: ImageComponentType;
};

const ExternalComponentContext = createContext<ExternalComponentContext>({
  CTAComponent: defaultCTAComponent,
  ImageComponent: defaultImageComponent,
});

export const ExternalComponentContextProvider = ({
  children,
  value: {
    CTAComponent = defaultCTAComponent,
    ImageComponent = defaultImageComponent,
  } = {},
}: {
  value?: Partial<ExternalComponentContext>;
  children: React.ReactNode;
}) => {
  return (
    <ExternalComponentContext.Provider
      value={{
        CTAComponent,
        ImageComponent,
      }}
    >
      {children}
    </ExternalComponentContext.Provider>
  );
};

export const CTAComponent: CTAComponentType = ({ children, ...ctaProps }) => {
  const { CTAComponent: ExternalCTAComponent } = useContext(
    ExternalComponentContext,
  );
  return <ExternalCTAComponent {...ctaProps}>{children}</ExternalCTAComponent>;
};

export const ImageComponent: ImageComponentType = props => {
  const { ImageComponent: ExternalImageComponent } = useContext(
    ExternalComponentContext,
  );
  return <ExternalImageComponent {...props} />;
};

export default ExternalComponentContext;
