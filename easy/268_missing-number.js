// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num)
  const n = nums.length;
  const arithmeticSum = n * (n + 1) / 2;

  return arithmeticSum - sum
};