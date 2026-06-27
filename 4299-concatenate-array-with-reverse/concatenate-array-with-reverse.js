/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let res = [...nums]
    for (let i = nums.length - 1; i >= 0; i--)
        res.push(nums[i])
    return res
};