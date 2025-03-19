/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operation=0
    for(let i=0;i<nums.length-2;i++){
        if(nums[i]==0){
            operation++
            nums[i]=1
            nums[i+1]= nums[i+1]==0?1:0
            nums[i+2]= nums[i+2]==0?1:0
        }
    }
    if(new Set(nums).size==1) return operation
    return -1
};