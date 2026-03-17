/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    let fre={}
    for(let i=0;i<nums.length;i++){
        fre[nums[i]]=(fre[nums[i]]||0)+1
    }
    for(elem of nums){
        if(elem%2==0&&fre[elem]==1) return elem
    }
    return -1
};