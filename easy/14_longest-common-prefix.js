// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const firstItem = strs[0]

  for (let i = 0; i < firstItem.length; i++) {
    for (const str of strs) {
      if (str[i] !== firstItem[i]) {
        return firstItem.slice(0, i)
      }
    }
  }

  return firstItem
}