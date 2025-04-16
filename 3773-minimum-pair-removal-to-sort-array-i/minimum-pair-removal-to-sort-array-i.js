/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }
    if (isSorted(nums)) {
        return 0
    }
    let operation = 0
    while (!isSorted(nums)) {
        let sum = Infinity, index = 0
        for (let i = 0; i < nums.length - 1; i++) {
            console.log(i)
            if ((nums[i] + nums[i + 1]) < sum) {
                index = i
                sum = nums[i] + nums[i + 1]
            }
        }
        operation++
        nums.splice(index, 2, sum)
        console.log(nums)
    }
    return operation
};