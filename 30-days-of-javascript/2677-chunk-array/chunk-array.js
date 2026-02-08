/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let i = 0, len = arr.length;
    const res = [];
    while(i < len) {
        const temp = [];
        let remaining = len - i;
        for(let j = 0; j < Math.min(remaining, size); j++) {
            temp.push(arr[i++]);
        } 
        res.push(temp);
    }
    return res;
};
