/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // another approach: return (JSON.stringify(obj).length <= 2);
    return Object.keys(obj).length === 0;
};
