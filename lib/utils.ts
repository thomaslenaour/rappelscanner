import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { appUrl } from '@/config/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path?: string) {
  return `${appUrl}${path}`;
}
