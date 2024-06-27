type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let start = init;
    
    for(let i = 0; i < nums.length; ++i) {
        start = fn(start, nums[i]);
    }

    return start;
};