import type SortedArray from './sorted-array.js'
import type { Cmp1 } from '@prelude/cmp'
import findIndex from './find-index.js'

export const find =
  <T, K>(self: SortedArray<T, K>, cmp1: Cmp1<K>): undefined | T => {
    const index = findIndex(self, cmp1)
    return index < 0 ?
      undefined :
      self.values[index]
  }

export default find
