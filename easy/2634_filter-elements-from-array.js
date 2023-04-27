// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    if (fn(current, i)) {
      result.push(current)
    }
  }

  return result
}