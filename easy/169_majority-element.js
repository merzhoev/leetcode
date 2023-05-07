// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hashMap = {}

  for (const num of nums) {
    hashMap[num] = (hashMap[num] ?? 0) + 1

    if (hashMap[num] >= nums.length / 2) {
      return num
    }
  }
};