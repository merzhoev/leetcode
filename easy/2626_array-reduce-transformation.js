// https://leetcode.com/problems/array-reduce-transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
  let acc = init;
  for (const num of nums) {
    acc = fn(acc, num)
  }

  return acc
}