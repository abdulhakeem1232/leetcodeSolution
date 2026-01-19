/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let max = Math.max(...nums)
    let res = 0
    for (let i = 0; i < nums.length; i++)
        res += (max - nums[i])
    return res
};