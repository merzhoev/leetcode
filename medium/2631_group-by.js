// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const grouped = {}
  for (const item of this) {
    const key = fn(item)
    grouped[key] ??= []
    grouped[key].push(item)
  }

  return grouped
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */