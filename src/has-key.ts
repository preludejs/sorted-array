import has from './has.js'
import type SortedArray from './sorted-array.js'

/** @returns `true` if element with `key` exists in sorted array, `false` otherwise. */
const hasKey =
  <T, K>(self: SortedArray<T, K>, key: K): boolean =>
    has(self, _ => self.cmp(_, key))

export default hasKey
