/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    if(nums.length==1) return true
    let fre={}
    for(let i=0;i<nums.length;i++){
        fre[nums[i]]=(fre[nums[i]]||0)+1
    }
    let mid=Math.floor(nums.length/2)
    return fre[nums[mid]]==1
};