import { expect, expectTypeOf, test } from '@voidzero-dev/vite-plus/test'

test('type', () => {
  expectTypeOf(1).toEqualTypeOf(2)
  expect(1).toBe(2) // not executed
})
