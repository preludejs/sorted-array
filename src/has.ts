import bsearch from './bsearch.js'
import type { CmpA } from '@prelude/cmp'
import type SortedArray from './sorted-array.js'

/** @returns `true` if element exists in sorted array, `false` otherwise. */
const has =
  <T, K>(sortedArray: SortedArray<T, K>, cmp1: CmpA<K>): boolean =>
    bsearch(sortedArray, cmp1) >= 0

export default has
