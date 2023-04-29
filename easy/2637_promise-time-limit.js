// https://leetcode.com/problems/promise-time-limit/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const originalPromise = fn(...args)

    const timeoutPromise = new Promise((_, rej) => {
      setTimeout(rej, t, 'Time Limit Exceeded')
    })

    return Promise.race([originalPromise, timeoutPromise])
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */