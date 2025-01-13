import type React from 'react'
import type { LayoutWrapperFn } from '.'

import { cn } from '@/shared/lib'

const currentYear = new Date().getFullYear()

export const BaseLayout: LayoutWrapperFn = async ({ children }) => {
  return (
    <>
      <header className={cn('py-6')}></header>

      <section className={cn('flex-grow place-content-center')}>
        {children}
      </section>

      <footer
        className={cn(
          'py-4 text-center font-mono',
          'text-xs font-light text-black/20',
        )}
      >
        &copy; 2024 - {currentYear} | All right reserved
      </footer>
    </>
  )
}
BaseLayout.displayName = 'Base Layout Wrappper'
