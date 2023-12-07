import { Fragment, ReactNode } from "react";

import Header from "./website-components/src/header";
import headerData from "./headerProps.json";
import { Props } from "./website-components/src/header/types";
type RefreshCTAData = {
  type: "LINK" | "BUTTON";
  label: string;
  url: string;
  action: "NAVIGATE" | "OPEN_MODAL" | "SCROLL_TO_ID";
  isOpenNewTab?: boolean;
};

type Cta = {
  label: string;
  icon?: string;
};

type CtaComponent = Cta & { data?: RefreshCTAData } & { children: ReactNode };

function App() {
  const headerProps: Props = {
    CTAComponent: ({ children, ...ctaProps }: CtaComponent) => {
      if (!ctaProps.data) {
        return <Fragment>{children}</Fragment>;
      }
      const { url } = ctaProps.data;
      if (ctaProps.data.action === "NAVIGATE") {
        return <a href={url}>{children}</a>;
      } else {
        return (
          <button
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            {children}
          </button>
        );
      }
    },
    ImageComponent: (data) => {
      return (
        <img
          style={{
            width: "100%",
          }}
          src={data.imageData.url}
        ></img>
      );
    },
    ...headerData,
  };
  return (
    <>
      <Header {...headerProps} />
      <h1 className="text-3xl text-red-500">Hello</h1>
    </>
  );
}

export default App;
