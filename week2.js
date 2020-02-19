//test cases
[
  [1,1,3,2],
  [2,2,2,1,3,1],
  [1,1,1],
  [0],
  [0,1,2],
  [2,2,2]
]

//solution
function sortedSpecialBag (weights, maxWeight = 3, bags = 0) {
  console.log(weights)
  if (weights.length === 0) {
    return bags
  } else if (weights.length === 1){
    weights.pop()
    return sortedSpecialBag(weights, maxWeight, bags + 1)
  } else {
    const highestWeight = weights[0]
    const lowestWeight = weights[weights.length - 1]
    if (highestWeight + lowestWeight < maxWeight) {
      weights[0] = highestWeight + lowestWeight
      weights.pop()
      return sortedSpecialBag(weights, maxWeight, bags)
    } else {
      weights.shift()
      weights.pop()
      return sortedSpecialBag(weights, maxWeight, bags + 1)
    }
  }
} 

function specialBag(weights, maxWeight) {
  weights.sort((a, b) => {
    return b - a
  })
  return(sortedSpecialBag(weights, maxWeight))
}

//testing
console.log(specialBag([1,1,1,1,1,1,1,1, 7], 8))