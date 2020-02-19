const specialBag = require('../weeks/week2')

const testCases = [
  [1,1,3,2],
  [2,2,2,1,3,1],
  [1,1,1],
  [0],
  [0,1,2],
  [2,2,2], 
  [1,2,3,3,2,2,2,1,1,2,0]
]

test('should return an array of correct bag sizes [2, 3, 1, 0, 1, 2, 7]', () => {
  expect(testCases.map(cas => {
    const caseCopy = [...cas]
    return specialBag(caseCopy, 3)
  }))
    .toEqual([3, 4, 1, 0, 1, 3, 7])
})