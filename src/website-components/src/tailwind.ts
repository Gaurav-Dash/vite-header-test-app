import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';

const isTypographyPreset = (value: string) => {
  return /^(desktop|mobile|tablet)/.test(value);
};

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'base',
            validators.isTshirtSize,
            validators.isArbitraryLength,
            isTypographyPreset,
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
