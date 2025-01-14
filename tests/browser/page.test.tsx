import type { RenderResult } from 'vitest-browser-react'
import Page from '@/app/(routes)/(home)/page'

import { appUrl, githubRepo } from '@/app/settings'
import { afterEach, beforeEach, describe, it } from 'vitest'
import { cleanup, render } from 'vitest-browser-react'

describe('page component', () => {
  let screen: RenderResult

  beforeEach(() => (screen = render(<Page />)))
  afterEach(() => cleanup())

  it('renders the main heading', ({ expect }) => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Kyuar - Generate QR Codes/i,
    })

    expect(heading.element()).toBeInTheDocument()
  })

  it('renders the Github link with correct href', ({ expect }) => {
    const githubLink = screen.getByRole('link', {
      name: /Github organization/i,
    })

    expect(githubLink.element()).toBeInTheDocument()
    expect(githubLink.element()).toHaveAttribute('href', githubRepo)
  })

  it('renders the Telegram link with correct href', ({ expect }) => {
    const telegramLink = screen.getByRole('link', { name: /Telegram App/i })

    expect(telegramLink.element()).toBeInTheDocument()
    expect(telegramLink.element()).toHaveAttribute('href', appUrl)
  })
})
