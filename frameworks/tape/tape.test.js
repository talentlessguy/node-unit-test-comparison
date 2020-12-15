import test from 'tape'
import { sum } from '../../src/index.js'

test('sum(a, b)', (t) => {
  t.plan(2)
  t.equal(sum(2, 3), 5, 'should sum two numbers')
  t.equal(sum(2, 0), 2, 'should return first if second is zero')
})
