import { appUrl, githubRepo } from '@/app/settings'
import { cn } from '@/shared/lib'
import { GithubIcon, TelegramIcon } from '@/shared/ui'

import Link from 'next/link'

export default function Page() {
  return (
    <main className={cn('grid place-content-center font-sans')}>
      <h1 className={cn('text-3xl font-semibold')}>
        Kyuar - Generate QR Codes
      </h1>

      <div className="mt-4 flex flex-wrap gap-2 sm:flex-row sm:gap-4">
        <Link
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full border-none bg-black/75 px-2 py-0.5 text-sm text-white transition-colors hover:bg-black/90 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-base"
        >
          <GithubIcon />
          Github organization
        </Link>
        <Link
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full border-none bg-black/75 px-2 py-0.5 text-sm text-white transition-colors hover:bg-black/90 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-base"
        >
          <TelegramIcon monochrome />
          Telegram App
        </Link>
      </div>
    </main>
  )
}
