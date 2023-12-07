import React from 'react';
import Icon from './Icon';
import { cn } from './tailwind';
import { Cta } from './types';
import { VariantProps, cva } from 'class-variance-authority';

const variants = cva(
  `inline-flex items-center gap-3 text-baseBlack text-center font-semibold hover:text-primaryOceanBlue hover:underline`,
  {
    variants: {
      size: {
        lg: `text-base leading-normal tracking-[3.2px] font-var-all-small-caps hover:font-bold`,
        sm: ` text-sm leading-none tracking-[2.8px] font-var-all-small-caps hover:font-semibold hover:underline`,
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

const TextLink = ({
  icon,
  label,
  size,
  className,
}: Cta & VariantProps<typeof variants> & { className?: string }) => {
  return (
    <span className={cn(variants({ size }), className)}>
      <Icon
        icon={icon ?? 'arrow'}
        className={`fill-primaryOceanBlue ${
          size === 'lg' ? 'h-6 w-6' : 'h-[18px] w-[18px] '
        }`}
      />
      <span>{label}</span>
    </span>
  );
};

export default TextLink;
