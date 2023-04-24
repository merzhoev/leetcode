// https://leetcode.com/problems/sleep/

/**
 * @param {number} ms
 */
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */