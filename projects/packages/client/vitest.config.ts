import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
})
