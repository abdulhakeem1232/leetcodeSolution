/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    let s1 = Infinity, l1 = -Infinity, l2 = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= l1) {
            l2 = l1
            l1 = nums[i]
        }
        else if (nums[i] > l2)
            l2 = nums[i]
        if (nums[i] < s1)
            s1 = nums[i]
    }
    return (l1 + l2) - s1
};