// https://leetcode.com/problems/matrix-diagonal-sum

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const size = mat.length
  let sum = 0

  for (let i = 0; i < size; i++) {
    sum += mat[i][i] + mat[i][size - i - 1]
  }

  if (size % 2 === 0) {
    return sum
  }

  const intersectionIdx = Math.floor(size / 2)

  return sum - mat[intersectionIdx][intersectionIdx]
};