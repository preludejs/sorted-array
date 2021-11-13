import * as Cmp from '@prelude/cmp'
import primitive from './primitive.js'
import type SortedArray from './sorted-array.js'

const strings =
  (asc = true): SortedArray<string, string> =>
    primitive(asc ? Cmp.strings : Cmp.reversed(Cmp.strings))

export default strings
