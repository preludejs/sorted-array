import type SortedArray from './sorted-array.js'
import type * as Cmp from '@prelude/cmp'

const primitive =
  <T extends number | string>(cmp: Cmp.t<T>): SortedArray<T, T> => ({
    cmp,
    keyOfValue: _ => _,
    values: []
  })

export default primitive
