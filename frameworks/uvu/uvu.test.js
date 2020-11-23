import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import * as math from '../../src/index.js'

const sum = suite('sum')

sum('should sum two numbers', () => {
  assert.is(math.sum(3, 2), 5)
})

sum('should return first if second is zero', () => {
  assert.is(math.sum(2, 0), 2)
})

sum.run()
