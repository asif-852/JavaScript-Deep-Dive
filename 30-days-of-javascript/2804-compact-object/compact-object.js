/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Array part
    if(typeof (obj) === "number" || typeof (obj) === "boolean" || typeof (obj) === "string") {
        return obj;
    }

    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    // Object part
    if(obj === null) {
        return obj;
    }
    const res = {};
    for(const key in obj) {
        const val = compactObject(obj[key]);
        if(val) {
            res[key] = val;
        }
    }
    return res;
};

