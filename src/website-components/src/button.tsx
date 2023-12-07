import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './tailwind';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        bare: 'block rounded-none',
        primary: 'bg-primaryOceanBlue text-white hover:bg-secondarySlateBlue',
        secondary:
          'border-2 border-solid h-9 border-primaryOceanBlue text-primaryOceanBlue hover:bg-secondarySlateBlue hover:border-secondarySlateBlue hover:text-white group lg:h-auto',
        link: 'text-black underline-offset-4 hover:underline font-var-all-small-caps font-semibold',
        light: 'bg-white text-[#177CBA] hover:bg-white/90 ring-offset-black',
        /* TODO: Assign a better name to this variant */
        blueBorder:
          'bg-white text-sky-600 border-2 border-sky-600 hover:bg-white/90 focus-visible:ring-blue-500',
      },
      size: {
        default:
          'text-desktop/subhead-s font-var-all-small-caps px-8 py-[18px] gap-2.5 h-9',
        sm: 'py-1.5 px-5 text-[12px] font-semibold',
        lg: 'h',
        icon: 'h-10 w-10',
        bare: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
