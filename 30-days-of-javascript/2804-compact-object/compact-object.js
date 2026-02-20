/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Array Handling
    if(['number', 'boolean', 'string'].includes(typeof obj)) {
        return obj;
    }

    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    // Object Handling
    if(obj === null) {
        return obj;
    }
    return Object.entries(obj).reduce((res, [key, value]) => {
        const Value = compactObject(value);
        if(Value) {
            res[key] = Value;
        }
        return res;
    }, {});
};

