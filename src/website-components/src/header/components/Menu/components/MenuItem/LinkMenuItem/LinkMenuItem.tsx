import React from 'react';
import { CTAComponent } from '../../../../../../ExternalComponent/ExternalComponent';
import { LinkNavItem as LinkMenuItemProps } from '../../../../../types';
import MenuLabel from '../../MenuLabel';

type Props = LinkMenuItemProps & {
  onHover: (label: string) => void;
  isHovered: boolean;
};

function LinkMenuItem(props: Props) {
  const { label, cta, isHovered = false } = props;

  return (
    <CTAComponent {...cta}>
      <MenuLabel isActive={isHovered} label={label} />
    </CTAComponent>
  );
}

export default LinkMenuItem;
