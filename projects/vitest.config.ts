import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
})
