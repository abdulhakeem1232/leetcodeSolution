/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let sum = 0, fre = {}
    for (let i = 0; i < nums.length; i++) {
        fre[nums[i]] = (fre[nums[i]] || 0) + 1
    }
    for (let key in fre) {
        if (fre[key] % k == 0)
            sum += (fre[key] * key)
    }
    return sum
};