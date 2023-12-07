import React from 'react';
import Icon, { IconType } from '../../../../../Icon';
import { cn } from '../../../../../tailwind';

type MenuLabelVariant = 'PRIMARY' | 'SECONDARY';

type Props = {
  label: string;
  variant?: MenuLabelVariant;
  icon?: IconType;
  isDropdown?: boolean;
  isActive?: boolean;
  isUnderlined?: boolean;
  onHover?: () => void;
};

const MenuLabel = ({
  label,
  variant = 'PRIMARY',
  icon,
  isActive = false,
  isDropdown = false,
  onHover,
}: Props) => {
  return (
    <div className={cn('flex items-center gap-2 w-max')} onMouseEnter={onHover}>
      {icon ? <Icon icon={icon} className="h-[14]" /> : null}
      <span
        className={cn(
          'font-var-all-small-caps text-desktop/subhead-s-narrow py-0',
          variant === 'SECONDARY'
            ? 'desktop-sm:text-desktop/subhead-xs desktop-lg:text-desktop/subhead-s text-cometBlack hover:text-cometBlack/80'
            : 'desktop-sm:text-desktop/subhead-s desktop-lg:text-desktop/subhead-m hover:text-primarySkyBlue',
          isActive ? 'text-primarySkyBlue' : '',
        )}
        data-text={label}
      >
        {label}
      </span>
      {isDropdown ? (
        <Icon
          icon="chevron"
          className={cn(
            'h-[14px]',
            isActive ? 'rotate-180 fill-primarySkyBlue' : '',
          )}
        />
      ) : null}
    </div>
  );
};

export default MenuLabel;
