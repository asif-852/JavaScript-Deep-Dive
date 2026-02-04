class TimeLimitedCache {
    
    constructor() {
        this.cache = new Map();
    }

    /** * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        let exist = this.cache.has(key);
        if(exist) {
            clearTimeout(this.cache.get(key).timerID);
        }
        const timerID = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, {value, timerID});
        return exist;
    }

    /** * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    /** * @return {number} count of non-expired keys
     */
    count() {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */