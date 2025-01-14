import { createEnv } from '@t3-oss/env-nextjs'
import { vercel } from '@t3-oss/env-nextjs/presets'

export const env = createEnv({
  server: {},
  client: {},
  shared: {},

  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
  extends: [vercel()],
})
