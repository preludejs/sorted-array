import * as Cmp from '@prelude/cmp'
import primitive from './primitive.js'
import type SortedArray from './sorted-array.js'

const strings =
  (asc = true): SortedArray<string, string> =>
    primitive(asc ? Cmp.string : Cmp.reversed(Cmp.string))

export default strings
