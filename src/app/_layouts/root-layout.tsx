import type React from 'react'
import type { LayoutWrapperFn } from '.'

import { cn } from '@/shared/lib'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/shared/assets/styles/tailwind.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const RootLayout: LayoutWrapperFn = async ({ children }) => {
  return (
    <html
      lang="uz"
      className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
    >
      <body id="app">{children}</body>
    </html>
  )
}
RootLayout.displayName = 'Root layout wrapper'
