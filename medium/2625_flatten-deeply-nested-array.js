// https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

const flat = (arr, n) => {
  if (n === 0) return arr

  const res = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item, n - 1))
      continue
    }

    res.push(item)
  }

  return res
}