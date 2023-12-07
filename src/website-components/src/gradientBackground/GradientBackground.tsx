//libs
import React, { Fragment, ReactNode } from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';

const CENTER_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(15% 15% at 50% 50%, rgba(112, 191, 84, 0.20) 0%, transparent 100%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',

  backgroundPosition: '50% 50%',
  animationName: keyframes({
    '15%': {
      transform: 'translateX(20%) translateY(-50%)',
    },
    '50%': {
      transform: 'translateX(-20%) translateY(-50%)',
    },
    '75%': {
      transform: 'translateX(0%) translateY(20%)',
    },
  }).toString(),
  animationDuration: '20s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

const TOP_LEFT_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(25% 25% at 50% 50%, rgba(0, 186, 233, 0.10) 21.35%, transparent 75.52%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',

  backgroundPosition: '50% 50%',
  transform: 'translateX(-60%) translateY(-40%)',
  animationName: keyframes({
    '50%': {
      transform: 'translateX(-10%) translateY(-30%)',
    },
  }).toString(),
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

const TOP_RIGHT_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(30% 30% at 50% 50%, rgba(0, 186, 233, 0.10) 21.35%, transparent 75.52%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',
  backgroundPosition: '50% 50%',
  transform: 'translateX(60%) translateY(-40%)',
  animationName: keyframes({
    '50%': {
      transform: 'translateX(10%) translateY(-30%)',
    },
  }).toString(),
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

const BOTTOM_LEFT_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(15% 20% at 50% 50%, rgba(0, 186, 233, 0.10) 21.35%, transparent 75.52%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',

  backgroundPosition: '50% 50%',
  transform: 'translateX(-40%) translateY(40%)',

  animationName: keyframes({
    '50%': {
      transform: 'translateX(-40%) translateY(30%)',
    },
  }).toString(),
  animationDuration: '50s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

const BOTTOM_LEFT_2_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(25% 25% at 50% 50%, rgba(250, 162, 27, 0.25) 21.35%, transparent 75.52%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',

  backgroundPosition: '50% 50%',
  transform: 'translateX(-40%) translateY(40%)',

  animationName: keyframes({
    '50%': {
      transform: 'translateX(-20%) translateY(30%)',
    },
  }).toString(),
  animationDuration: '20s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

const BOTTOM_RIGHT_GRADIENT_CLASSNAME = {
  backgroundImage:
    'radial-gradient(20% 30% at 50% 50%, rgba(17, 138, 203, 0.20) 21.35%, transparent 75.52%)',
  backgroundAttachment: 'fixed',
  backgroundSize: '200% 200%',

  backgroundPosition: '50% 50%',
  transform: 'translateX(40%) translateY(40%)',

  animationName: {
    '33%': {
      transform: 'translateX(40%) translateY(10%)',
    },
    '66%': {
      transform: 'translateX(30%) translateY(40%)',
    },
  }.toString(),
  animationDuration: '40s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
} as ThemeUIStyleObject;

export const GradientBackground = ({
  rootSx,
  children,
}: {
  rootSx?: ThemeUIStyleObject;
  children?: ReactNode;
}): JSX.Element => (
  <Fragment>
    <Box
      className={'fixed h-screen w-screen overflow-hidden'}
      sx={rootSx}
      data-type="bg"
    >
      <Box
        sx={CENTER_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
      <Box
        sx={TOP_LEFT_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
      <Box
        sx={TOP_RIGHT_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
      <Box
        sx={BOTTOM_LEFT_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
      <Box
        sx={BOTTOM_LEFT_2_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
      <Box
        sx={BOTTOM_RIGHT_GRADIENT_CLASSNAME}
        className={'absolute top-0 w-full h-full -z-10'}
      />
    </Box>
    {children ? <div className="relative">{children}</div> : null}
  </Fragment>
);
