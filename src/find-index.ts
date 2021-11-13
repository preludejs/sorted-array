import bsearch from './bsearch.js'
import type { CmpA } from '@prelude/cmp'
import type SortedArray from './sorted-array.js'

/** @returns -1 if not found, otherwise index of element. */
const findIndex =
  <T, K>(self: SortedArray<T, K>, cmpA: CmpA<K>): number =>
    Math.max(-1, bsearch(self, cmpA))

export default findIndex
