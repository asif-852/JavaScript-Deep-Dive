/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    function flatten(arr) {
        let res = [];
        for(ele of arr) {
            if(typeof(ele) === 'object') {
                for(val of ele) {
                    res.push(val);
                }
            } else {
                res.push(ele);
            }
        }
        return res;
    }
    for(let i = 0; i < n; i++) {
        arr = flatten(arr);
    }
    return arr;
};