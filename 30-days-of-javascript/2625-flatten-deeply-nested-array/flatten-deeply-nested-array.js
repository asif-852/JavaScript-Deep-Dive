/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) {
        return arr;
    }

    const ans = [];
    for(const ele of arr) {
        if(typeof(ele) === 'object') {
            const temp = flat(ele, n - 1);
            ans.push(...temp);
        } else {
            ans.push(ele);
        }
    }
    return ans;
};