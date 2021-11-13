import type SortedArray from './sorted-array.js'
import bsearch from './bsearch.js'
import * as Cmp from '@prelude/cmp'

const upsert =
  <T, K>(self: SortedArray<T, K>, value: T, merge: (a: T, b: T) => T): number => {
    const key = self.keyOfValue(value)
    const i = bsearch(self, _ => self.cmp(_, key))
    if (i < 0) {
      self.values.splice(-(i + 1), 0, value)
    } else {
      const value_ = merge(self.values[i], value)
      const key_ = self.keyOfValue(value_)
      if (self.cmp(key, key_) !== Cmp.equal) {
        throw new Error('Key modification on merge.')
      }
      self.values[i] = value_
    }
    return i
  }

export default upsert
