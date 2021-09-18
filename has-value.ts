import has from './has.js'
import type SortedArray from './sorted-array.js'

/** @returns `true` if `value` exists in sorted array, `false` otherwise. */
const hasValue =
  <T, K>(self: SortedArray<T, K>, value: T): boolean =>
    has(self, _ => self.cmp(_, self.keyOfValue(value)))

export default hasValue
