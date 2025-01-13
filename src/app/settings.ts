import type { Metadata, Viewport } from 'next'

import { mergeParagraph } from '@/shared/lib'

export const githubRepo = 'https://github.com/kayp-oss/qr'
export const appUrl = 'https://kyuarbot.t.me'

export const metadata: Metadata = {
  title: {
    default: 'kyuar',
    template: '%s | kyuar',
  },
  description: mergeParagraph(
    'Telegram mini app asosida ishlovchi veb ilova bolib,',
    'foydalanuvchilarga tez va qulay tarzda, turli xil dizaynlarda',
    'QR-kodlar yaratishga yordam beradi. QR-kod yaratish endi juda oson va moslashuvchan!',
  ),
  authors: [
    { name: 'Kayp Open Source', url: 'https://github.com/kayp-oss/qr' },
    { name: 'Mukhammaddiyor Takhirov', url: 'https://takhirov.uz' },
  ],
  publisher: 'Kayp Open Source',
}

export const viewport: Viewport = {
  colorScheme: 'normal',
  userScalable: false,
  initialScale: 1,
  interactiveWidget: 'resizes-visual',
}
