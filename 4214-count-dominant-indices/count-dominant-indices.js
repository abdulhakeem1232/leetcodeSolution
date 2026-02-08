/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    let sum=nums.reduce((acc,curr)=>acc+curr,0)
    let res=0
    for(let i=0;i<nums.length;i++){
        sum-=nums[i]
        if(nums[i]>(sum/(nums.length-(i+1))))res++
    }
    return res
};