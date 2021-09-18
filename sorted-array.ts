import type * as Cmp from '@prelude/cmp'

type SortedArray<T, K> = {
  cmp: Cmp.t<K>,
  keyOfValue: (value: T) => K,
  values: Array<T>
}

export default SortedArray
