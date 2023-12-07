import { IconType } from '../Icon';
import { Cta } from '../types';

export type FooterSubSection = {
  title: string;
  links: Cta[];
  className?: string;
};

export type FooterSection = {
  title: string;
  links?: Cta[];
  subSections?: FooterSubSection[];
};

type SocialLink = {
  label: string;
  icon: IconType;
  cta: Cta;
};

export type Props = {
  mainLogoCta: Cta;
  socialLinks: SocialLink[];
  contactUsTitle: string;
  contactUsCta: Cta;
  sections: FooterSection[];
  infoLinks: Cta[];
  copyrightText: string;
};
