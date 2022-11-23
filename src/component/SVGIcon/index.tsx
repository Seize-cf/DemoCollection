import React from 'react';

export interface SvgIconProps {
  [key: string]: string | undefined;
  name: string;
  color?: string;
}

export default function SVGIcon({
  name,
  color = '#333333',
  ...props
}: SvgIconProps) {
  const symbolId = `#${name}`;

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
