import bsearch from './bsearch.js'
import type { Cmp1 } from '@prelude/cmp'
import type SortedArray from './sorted-array.js'

/** @returns -1 if not found, otherwise index of element. */
const findIndex =
  <T, K>(self: SortedArray<T, K>, cmp1: Cmp1<K>): number =>
    Math.max(-1, bsearch(self, cmp1))

export default findIndex
