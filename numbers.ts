import * as Cmp from '@prelude/cmp'
import primitive from './primitive.js'
import type SortedArray from './sorted-array.js'

const numbers =
  (asc = true): SortedArray<number, number> =>
    primitive(asc ? Cmp.numbers : Cmp.reversed(Cmp.numbers))

export default numbers
