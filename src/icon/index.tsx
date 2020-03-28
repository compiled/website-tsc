/** @jsx jsx */
import { lazy, Suspense, useMemo } from 'react';
import { jsx } from '@compiled/css-in-js';
import Github from './github.svg';

interface IconProps {
  name: 'string';
}

export const Icon = ({ name }: IconProps) => {
  return (
    <span css={{ display: 'inline-block' width: '3rem', height: '3rem', fill: 'white' }}>
      <Github />
    </span>
  );
};
