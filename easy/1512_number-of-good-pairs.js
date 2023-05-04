// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let res = 0
  const hash = {}

  for (const num of nums) {
    const value = hash[num] ?? 0
    res += value
    hash[num] = value + 1
  }

  return res
};