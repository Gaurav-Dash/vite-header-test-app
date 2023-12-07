import { Cta } from '../types';

export type LangItem = {
  isoCode: string;
  cta: {
    data: {
      type: string;
      action: string;
      text: string;
      url: string;
      external: boolean;
    };
    type: string;
    label: string;
  };
};

export type LangSelectorTranslation = {
  locale: string;
  cta: Cta;
};

type LangSelectorVariants = 'HEADER' | 'FOOTER' | 'MOBILE';

export type LanguageSelectorProps = {
  activeLocale?: string;
  translations: LangSelectorTranslation[];
  children?: React.ReactElement;
  containerClassName?: string;
  isDark?: boolean;
  variant?: LangSelectorVariants;
};
