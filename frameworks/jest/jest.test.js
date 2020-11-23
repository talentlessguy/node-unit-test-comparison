import { sum } from '../../src/index.js'

describe('sum(a, b)', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })
  it('should return first if second is zero', () => {
    expect(sum(2, 0)).toBe(2)
  })
})
