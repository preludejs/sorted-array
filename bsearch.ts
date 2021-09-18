import type SortedArray from './sorted-array.js'
import type { Cmp1 } from '@prelude/cmp'

/** @private */
const bsearch =
  <T, K>({ values, keyOfValue }: SortedArray<T, K>, cmp1: Cmp1<K>): number => {
    let low = 0
    let high = values.length - 1
    while (low <= high) {
      const mid = (low + high) >>> 1
      switch (cmp1(keyOfValue(values[mid]))) {
        case -1:
          low = mid + 1
          break
        case 1:
          high = mid - 1
          break
        default:
          return mid
      }
    }
    return -(low + 1)
  }

export default bsearch
