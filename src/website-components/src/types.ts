import { IconType } from './Icon';
import { LangSelectorTranslation } from './languageSelector/types';
export type Cta = {
  label: string;
  icon?: IconType;
} & {
  [key: string]: any;
};

export type LanguageSelectorProps = {
  translations: LangSelectorTranslation[];
  activeLocale: string;
};
