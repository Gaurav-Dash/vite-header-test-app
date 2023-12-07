import React from 'react';
import { cn } from '../../../tailwind';

const parseContentfulText = (text: string) => {
  return text.replace('\\n', '\n');
};

const Text = ({
  className,
  children,
  as = 'span',
}: {
  className?: string;
  children?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}) => {
  const As = as;
  return (
    <As className={cn('whitespace-pre-line', className)}>
      {children ? parseContentfulText(children) : null}
    </As>
  );
};

export default Text;
