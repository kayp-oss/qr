import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge as merge } from 'tailwind-merge'

export function cn(...tokens: ClassValue[]): string {
  return merge(clsx(tokens))
}
