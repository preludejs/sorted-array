import * as A from '../index.js'

test('numbers', () => {
  const xs = A.numbers()
  for (let i = 0; i < 1000; i++) {
    A.insert(xs, Math.random())
  }
  expect(xs.values).toEqual(xs.values.slice().sort((a, b) => a - b))
})

test('strings', () => {
  const xs = A.strings()
  expect(A.insert(xs, 'foo')).toEqual(-1)
  expect(A.insert(xs, 'bar')).toEqual(-1)
  expect(A.insert(xs, 'baz')).toEqual(-2)
  expect(xs.values).toEqual([ 'bar', 'baz', 'foo' ])
  expect(A.hasValue(xs, 'foo')).toBe(true)
  expect(A.hasKey(xs, 'bar')).toBe(true)
  expect(A.has(xs, _ => A.Cmp.strings(_, 'baz'))).toBe(true)
  expect(A.hasValue(xs, 'zig')).toBe(false)
})
