import type SortedArray from './sorted-array.js'
import type { CmpA } from '@prelude/cmp'
import findIndex from './find-index.js'

export const find =
  <T, K>(self: SortedArray<T, K>, cmpA: CmpA<K>): undefined | T => {
    const index = findIndex(self, cmpA)
    return index < 0 ?
      undefined :
      self.values[index]
  }

export default find
