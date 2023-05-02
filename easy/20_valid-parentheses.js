// https://leetcode.com/problems/valid-parentheses/

const isOpenBracket = (bracket) => ['(', '{', '['].includes(bracket)

/**
 * @param {string} brackets
 * @return {boolean}
 */
const isValid = (brackets) => {
  const openBrackets = []
  const bracketsPair = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (const bracket of brackets) {
    if (isOpenBracket(bracket)) {
      openBrackets.push(bracket)
      continue
    }

    if (openBrackets.pop() !== bracketsPair[bracket]) {
      return false
    }
  }

  return openBrackets.length === 0
};