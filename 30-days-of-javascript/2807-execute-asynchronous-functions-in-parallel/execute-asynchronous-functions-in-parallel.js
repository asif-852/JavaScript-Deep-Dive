/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let n = functions.length;
        let remaining = n;
        const results = new Array(n);
        for(let i = 0; i < n; i++) {
            functions[i]().then((res) => {
                results[i] = res;
                if(--remaining === 0) {
                    resolve(results);
                }
            })
            .catch(reject);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */