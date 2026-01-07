/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let i=1
    while(nums.includes(k*i)){
        i++
    }
    return i*k
};