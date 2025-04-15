/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let sum = nums.reduce((acc, cur) =>
        acc + cur
        , 0)
    let mul = 1
    while (true) {
        if (mul * k > sum) {
            mul--
            break;
        }
        mul++
    }
    return sum-(mul*k)

};