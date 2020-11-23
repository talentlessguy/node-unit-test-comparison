import assert from 'assert'
import { sum } from '../../src/index.js'

describe('sum(a, b)', () => {
  it('should sum two numbers', () => {
    assert.strictEqual(sum(2, 3), 5)
  })
  it('should return first if second is zero', () => {
    assert.strictEqual(sum(2, 0), 2)
  })
})
