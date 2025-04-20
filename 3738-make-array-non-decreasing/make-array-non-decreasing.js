/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPossibleSize = function(nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        // Push current element
        stack.push(nums[i]);

        // If it's not non-decreasing, remove the last added (i.e., nums[i])
        if (stack.length >= 2 && stack[stack.length - 2] > stack[stack.length - 1]) {
            stack.pop(); // Remove nums[i]
        }
    }
    return stack.length;
};
