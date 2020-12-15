import { expect } from 'earljs'
import { sum } from '../../src/index.js'

describe('sum(a, b)', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toEqual(5)
  })
  it('should return first if second is zero', () => {
    expect(sum(2, 0)).toEqual(2)
  })
})
