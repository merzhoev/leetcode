/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splittedS = s.split(' ')

  if (pattern.length !== splittedS.length) return false
  if (new Set(pattern).size !== new Set(splittedS).size) return false;

  const map = {}

  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i]
    const value = splittedS[i]

    if (!map.hasOwnProperty(key)) {
      map[key] = value
      continue
    }

    if (value !== map.hasOwnProperty(key)) {
      return false
    }
  }

  return true
};