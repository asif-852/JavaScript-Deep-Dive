/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};
    for(const ele of this) {
        const key = fn(ele);
        res[key] = res[key] ?? [];  // Nullish Coalescing Operator (??)
        res[key].push(ele);
    }
    return res;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */