/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let min=Infinity
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if((nums[i]==1&&nums[j]==2)||(nums[i]==2&&nums[j]==1))
            min=Math.min(min,(j-i))
        }
    }
    if(min==Infinity)return -1
    return min
};