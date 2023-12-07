import { PlainCTA } from '../../header/types';
import { NAVIGATE_TO_URL_CTA_ACTION } from './constants';
import { ContentfulCTA } from './types';

export function getCTAProps(ctaData: ContentfulCTA): PlainCTA & {
  data: ContentfulCTA;
} {
  if (ctaData.action === NAVIGATE_TO_URL_CTA_ACTION) {
    return {
      data: {
        ...ctaData,
      },
      type: 'LINK',
      label: ctaData.text,
      icon: ctaData.icon,
      iconAlignment: ctaData.iconAlignment,
    };
  }

  return {
    data: {
      ...ctaData,
    },
    type: 'BUTTON',
    label: ctaData.text,
  };
}
