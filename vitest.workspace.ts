import { defineWorkspace } from 'vitest/config'

const DEFAULT_BROWSER = 'chromium'

export default defineWorkspace([
  {
    extends: 'vitest.config.mts',

    test: {
      name: 'unit',
      environment: 'node',

      include: [
        'tests/unit/**/*.{test,spec}.ts',
        'tests/**/*.unit.{test,spec}.ts',
      ],

      browser: { enabled: false, name: DEFAULT_BROWSER },
    },
  },
  {
    extends: 'vitest.config.mts',

    test: {
      name: 'browser',
      environment: 'jsdom',

      include: [
        'tests/browser/**/*.{test,spec}.{ts,tsx}',
        'tests/**/*.browser.{test,spec}.{ts,tsx}',
      ],
    },
  },
])
