import bsearch from './bsearch.js'
import type { Cmp1 } from '@prelude/cmp'
import type SortedArray from './sorted-array.js'

/** @returns `true` if element exists in sorted array, `false` otherwise. */
const has =
  <T, K>(sortedArray: SortedArray<T, K>, cmp1: Cmp1<K>): boolean =>
    bsearch(sortedArray, cmp1) >= 0

export default has
