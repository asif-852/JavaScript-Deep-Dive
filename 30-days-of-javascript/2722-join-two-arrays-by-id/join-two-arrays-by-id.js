/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {};
    const used = new Map();
    for(const obj of arr1) {
        used.set(obj.id, 1);
        res[obj.id] = obj;
    }
    for(let i = 0; i < arr2.length; i++) {
        const key = arr2[i].id;
        if(used.has(key)) {
            for(k in arr2[i]) {
                res[key][k] = arr2[i][k];
            }
        } else {
            res[key] = arr2[i];
        }
    }

    return Object.values(res);
};