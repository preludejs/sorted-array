import * as Cmp from '@prelude/cmp'
import type SortedArray from './sorted-array.js'

/** @private */
const bsearch =
  <T, K>({ values, keyOfValue }: SortedArray<T, K>, cmp1: Cmp.Cmp1<K>): number => {
    let low = 0
    let high = values.length - 1
    while (low <= high) {
      const mid = (low + high) >>> 1
      switch (cmp1(keyOfValue(values[mid]))) {
        case Cmp.asc:
          low = mid + 1
          break
        case Cmp.dsc:
          high = mid - 1
          break
        default:
          return mid
      }
    }
    return -(low + 1)
  }

export default bsearch
