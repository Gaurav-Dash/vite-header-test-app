import React from 'react';
import { Button } from '../../../../../button';
import MenuLabel from '../MenuLabel';

function SubNavItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <div className="border-b border-b-baseBlack/10">
      <Button
        variant="bare"
        size="bare"
        className="w-full m-0 p-0"
        onClick={onClick}
      >
        <MenuLabel label={label} isArrowEnabled />
      </Button>
    </div>
  );
}

export default SubNavItem;
