import React from 'react';
import { cn } from '../../lib/utils';

interface TagProps {
  key?: React.Key;
  label: string;
  color: 'orange' | 'green' | 'pink' | 'clear' | 'black';
}

const colorClasses: Record<TagProps['color'], string> = {
  orange: 'tag--orange',
  green: 'tag--green',
  pink: 'tag--pink',
  clear: 'tag--clear',
  black: 'tag--black',
};

export default function Tag({ label, color }: TagProps) {
  return <span className={cn('tag', colorClasses[color])}>{label}</span>;
}
