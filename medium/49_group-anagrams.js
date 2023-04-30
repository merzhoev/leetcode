// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const charCodeA = 97
  const hashMap = {}

  for (const str of strs) {
    let key = 1
    for (const char of str) {
      key *= primeNumbers[char.charCodeAt() - charCodeA]
    }

    hashMap[key] ??= []
    hashMap[key].push(str)
  }

  return Object.values(hashMap)
}