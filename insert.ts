import type SortedArray from './sorted-array.js'
import bsearch from './bsearch.js'

const insert =
  <T, K>(self: SortedArray<T, K>, value: T): number => {
    const key = self.keyOfValue(value)
    const i = bsearch(self, _ => self.cmp(_, key))
    const j = i < 0 ? -(i + 1) : i
    self.values.splice(j, 0, value)
    return i
  }

export default insert
