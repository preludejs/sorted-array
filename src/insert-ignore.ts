import type SortedArray from './sorted-array.js'
import bsearch from './bsearch.js'

const insertIgnore =
  <T, K>(self: SortedArray<T, K>, value: T): number => {
    const key = self.keyOfValue(value)
    const i = bsearch(self, _ => self.cmp(_, key))
    if (i < 0) {
      self.values.splice(-(i + 1), 0, value)
    }
    return i
  }

export default insertIgnore
