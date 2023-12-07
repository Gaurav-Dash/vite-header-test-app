import React from 'react';
import Icon from '../../../../../Icon';
import { Button } from '../../../../../button';

function BackNav({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="bare"
      size="bare"
      className="w-full flex justify-start items-center gap-2 pt-4 pb-6 border-[none] tablet:pb-8 border-b border-b-baseBlack/10"
      onClick={onClick}
    >
      <Icon
        className="h-2 transition-transform duration-200 ease-linear rotate-90"
        icon="chevron"
      />
      <span className="py-0 font-var-all-small-caps text-desktop/subhead-m">
        Back
      </span>
    </Button>
  );
}

export default BackNav;
