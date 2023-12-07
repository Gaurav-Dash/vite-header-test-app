export const DEFAULT_LANGUAGE_CONFIG = {
  lang: 'English (en-US)',
  locale: 'en-US',
  prefixSlug: 'us',
} as const;

export const LANGUAGE_CONFIG = [
  DEFAULT_LANGUAGE_CONFIG,
  {
    lang: 'English (en-GB)',
    locale: 'en-GB',
    prefixSlug: 'gb',
  },
  {
    lang: 'German (de-DE)',
    locale: 'de-DE',
    prefixSlug: 'de',
  },
  {
    lang: 'French (fr-FR)',
    locale: 'fr-FR',
    prefixSlug: 'fr',
  },
  {
    lang: 'Japanese (ja-JP)',
    locale: 'ja-JP',
    prefixSlug: 'jp',
  },
  {
    lang: 'Spanish (es-001)',
    locale: 'es-001',
    prefixSlug: 'es',
  },
  {
    lang: 'Korean (ko)',
    locale: 'ko',
    prefixSlug: 'ko',
  },
  {
    lang: 'Italian (it)',
    locale: 'it',
    prefixSlug: 'it',
  },
  {
    lang: 'Arabic (ar)',
    locale: 'ar',
    prefixSlug: 'ar',
  },
  {
    lang: 'Portuguese (pt-BR)',
    locale: 'pt-BR',
    prefixSlug: 'pt-br',
  },
] as const;
