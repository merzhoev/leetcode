// https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => ({
  count: init,
  increment() {
    return ++this.count
  },
  decrement() {
    return --this.count
  },
  reset() {
    return this.count = init
  }
});

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */