import test from 'oletus'
import { sum } from '../../src/index.js'

test('should sum two numbers', (t) => {
  t.equal(sum(2, 3), 5)
})

test('should return first if second is zero', (t) => {
  t.equal(sum(2, 0), 2)
})
