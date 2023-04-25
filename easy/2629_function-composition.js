// https://leetcode.com/problems/function-composition/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */