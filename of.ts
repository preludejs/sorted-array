import type SortedArray from './sorted-array.js'
import type * as Cmp from '@prelude/cmp'

const of =
  <T, K>({ cmp, keyOfValue }: {
    cmp: Cmp.t<K>,
    keyOfValue: (value: T) => K
  }): SortedArray<T, K> => ({
    cmp,
    keyOfValue,
    values: []
  })

export default of
