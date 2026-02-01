type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>();
    
    return function(...args) {
        const key = JSON.stringify(args);
        // console.log(key);

        if(cache.has(key)) {
            return cache.get(key);
        } else {
            let ret = fn(...args);
            cache.set(key, ret);
            return ret;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */