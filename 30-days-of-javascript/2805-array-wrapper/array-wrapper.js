class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((sum, num) => {
                return sum + num;
            }, 0
        )
    }

    toString() {
        return `[${String(this.nums)}]`;
    }
}

// Example usage:
// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2); // Expected: 10
// console.log(String(obj1)); // Expected: "[1,2]"
