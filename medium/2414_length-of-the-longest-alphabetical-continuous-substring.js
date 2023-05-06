// https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let res = 1
  let currentCount = 1

  for (let i = 1; i < s.length; i++) {
    const currentCharCode = s[i].charCodeAt()
    const prevCharCode = s[i - 1].charCodeAt()

    if (currentCharCode - prevCharCode === 1) {
      currentCount++
    } else {
      currentCount = 1
    }

    res = Math.max(res, currentCount)
  }

  return res
};