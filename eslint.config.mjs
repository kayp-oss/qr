/**
 * @file ESLint configuration file.
 *
 * This configuration includes `eslint-plugin-tailwindcss` but comments it out
 * due to compatibility issues with Tailwind CSS v4 beta. Once Tailwind CSS v4
 * reaches a stable release and compatibility with `eslint-plugin-tailwindcss`
 * is confirmed, uncomment the plugin for optimal Tailwind CSS linting support.
 *
 * @note Remember to revisit this file after upgrading Tailwind CSS to a stable version.
 */

import createConfig from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'

export default createConfig(
  {
    name: 'kyuar:base',
    type: 'app',

    stylistic: {
      indent: 2,
      jsx: false,
    },

    formatters: {
      css: true,
      html: true,
      svg: true,
      xml: true,
      markdown: 'dprint',
    },

    react: true,
    typescript: true,
    gitignore: true,
    jsx: true,

    test: true,
    markdown: true,
    regexp: true,
  },
  {
    name: 'kyuar:next:base',
    plugins: { '@next/next': next },

    rules: {
      // warnings
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-async-client-component': 'warn',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-sync-scripts': 'warn',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-typos': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      // errors
      '@next/next/inline-script-id': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-script-component-in-head': 'error',
    },
  },
)
