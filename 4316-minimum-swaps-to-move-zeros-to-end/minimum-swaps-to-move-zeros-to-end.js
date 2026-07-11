/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    let zeroCount=0,result=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) zeroCount++
    }
    for(let i=0;i<(nums.length-zeroCount);i++){
         if(nums[i]==0) result++
    }
    return result
};