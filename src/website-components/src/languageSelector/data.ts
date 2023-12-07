import { LangItem } from './types';

/*
 ToDo: Will update the types and pass it through context provider
*/

export const LangItems: LangItem[] = [
  {
    isoCode: 'en-US',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'English (US)',
        url: 'http://localhost:3000/us/',
        external: false,
      },
      type: 'LINK',
      label: 'English (US)',
    },
  },
  {
    isoCode: 'en-GB',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'English (GB)',
        url: 'http://localhost:3000/us/gb/',
        external: false,
      },
      type: 'LINK',
      label: 'English (GB)',
    },
  },
  {
    isoCode: 'fr',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'Français',
        url: 'http://localhost:3000/us/fr/',
        external: false,
      },
      type: 'LINK',
      label: 'Français',
    },
  },
  {
    isoCode: 'pt-BR',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'Português',
        url: 'http://localhost:3000/us/pt-br/',
        external: false,
      },
      type: 'LINK',
      label: 'Português',
    },
  },
  {
    isoCode: 'ja-JP',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: '日本語',
        url: 'http://localhost:3000/us/jp/',
        external: false,
      },
      type: 'LINK',
      label: '日本語',
    },
  },
  {
    isoCode: 'de-DE',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'Deutsch',
        url: 'http://localhost:3000/us/de/',
        external: false,
      },
      type: 'LINK',
      label: 'Deutsch',
    },
  },
  {
    isoCode: 'ko',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: '한국어',
        url: 'http://localhost:3000/us/kr/',
        external: false,
      },
      type: 'LINK',
      label: '한국어',
    },
  },
  {
    isoCode: 'es-001',
    cta: {
      data: {
        type: 'LINK',
        action: 'NAVIGATE_TO_URL',
        text: 'Español',
        url: 'http://localhost:3000/us/es/',
        external: false,
      },
      type: 'LINK',
      label: 'Español',
    },
  },
];
