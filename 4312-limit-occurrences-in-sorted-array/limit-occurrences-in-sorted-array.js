/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function (nums, k) {
    let res = [nums[0]], fre = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            if (fre < k) {
                fre++
                res.push(nums[i])
            }
        } else {
            fre = 1
            res.push(nums[i])
        }

    }
    return res
};