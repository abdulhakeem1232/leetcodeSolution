/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let max=0,left=0,right=nums.length-1
    while(left<right){
    max=Math.max((nums[left]+nums[right]),max)
    left++
    right--
    }
    return max
};