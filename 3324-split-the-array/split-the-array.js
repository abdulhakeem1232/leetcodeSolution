/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let fre={}
    for(let elem in nums){
        fre[nums[elem]]=( fre[nums[elem]]||0)+1
        if( fre[nums[elem]]==3) return false
    }
    return true
};