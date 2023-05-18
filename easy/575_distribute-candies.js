/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const candyTypeSet = new Set(candyType)

  return Math.min(candyTypeSet.size, candyType.length / 2)
};