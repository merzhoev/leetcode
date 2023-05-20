// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = []

  for (const current of nums) {
    const count = nums.reduce((acc, num) => acc + Number(current > num), 0)
    res.push(count)
  }

  return res
};