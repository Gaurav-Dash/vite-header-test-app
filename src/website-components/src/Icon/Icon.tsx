import React from 'react';
import service from './assets/svgs/service.svg';
import social from './assets/svgs/social.svg';
import insights from './assets/svgs/insights.svg';
import marketing from './assets/svgs/marketing.svg';
import arrow from './assets/svgs/arrow.svg';
import chevron from './assets/svgs/chevron.svg';
import facebook from './assets/svgs/facebook.svg';
import twitter from './assets/svgs/twitter.svg';
import linkedin from './assets/svgs/linkedin.svg';
import youtube from './assets/svgs/youtube.svg';
import instagram from './assets/svgs/instagram.svg';
import globe from './assets/svgs/globe.svg';
import sprinklrBurst from './assets/svgs/sprinklrBurst.svg';
import hamburgerMenu from './assets/svgs/hamburgerMenu.svg';
import play from './assets/svgs/play.svg';
import sprinklrFullLogo from './assets/svgs/sprinklrFullLogo.svg';
import sprinklrFullLogoDark from './assets/svgs/sprinklrFullLogoDark.svg';
import feature from './assets/svgs/feature.svg';
import quote from './assets/svgs/quote.svg';
import profile from './assets/svgs/profile.svg';
import reviewQuote from './assets/svgs/reviewQuote.svg';
import home from './assets/svgs/home.svg';
import arrowTriangle from './assets/svgs/arrow-triangle.svg';
import search from './assets/svgs/search.svg';
import resultsNotFound from './assets/svgs/resultsNotFound.svg';
import plus from './assets/svgs/plus.svg';
import minus from './assets/svgs/minus.svg';
import industry from './assets/svgs/industry.svg';
import location from './assets/svgs/location.svg';
import companySize from './assets/svgs/companySize.svg';
import arrowDown from './assets/svgs/arrowDown.svg';
import plusRounded from './assets/svgs/plusRounded.svg';
import close from './assets/svgs/close.svg';

const iconMap = {
  service,
  social,
  insights,
  marketing,
  arrow,
  chevron,
  facebook,
  twitter,
  linkedin,
  youtube,
  instagram,
  globe,
  sprinklrBurst,
  hamburgerMenu,
  play,
  sprinklrFullLogo,
  sprinklrFullLogoDark,
  feature,
  quote,
  profile,
  reviewQuote,
  home,
  arrowTriangle,
  search,
  resultsNotFound,
  plus,
  minus,
  industry,
  location,
  companySize,
  arrowDown,
  plusRounded,
  close,
};

export type IconType = keyof typeof iconMap;
// export type IconType = string;

type Props = {
  icon: IconType;
  alt?: string;
  className?: string;
};

const Icon = ({ icon, className }: Props) => {
  const Component = iconMap[icon];
  return  null;
};

export default Icon;
