'use client';
import { ReactElement } from 'react';
import useIsHeaderCollapsed from './hooks/useIsHeaderCollapsed';

export const HeaderIconConditionalWrapper = ({
  expandedIcon,
  collapsedIcon,
}: {
  expandedIcon: ReactElement;
  collapsedIcon: ReactElement;
}) => {
  const isHeaderCollapsed = useIsHeaderCollapsed();
  return isHeaderCollapsed ? collapsedIcon : expandedIcon;
};
