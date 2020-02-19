//solution
function sortedSpecialBag (weights, maxWeight = 3, bags = 0) {
  if (weights.length === 0 || weights[0] === 0) {
    return bags
  } else if (weights.length === 1){
    weights.pop()
    return sortedSpecialBag(weights, maxWeight, bags + 1)
  } else {
    const highestWeight = weights[0]
    const lowestWeight = weights[weights.length - 1]
    if (highestWeight + lowestWeight <= maxWeight) {
      weights[0] = highestWeight + lowestWeight
      weights.pop()
      return sortedSpecialBag(weights, maxWeight, bags)
    } else {
      weights.shift()
      return sortedSpecialBag(weights, maxWeight, bags + 1)
    }
  }
} 

const specialBag = (weights, maxWeight) => {
  weights.sort((a, b) => {
    return b - a
  })
  return(sortedSpecialBag(weights, maxWeight))
}

module.exports = specialBag