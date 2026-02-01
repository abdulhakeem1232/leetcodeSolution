/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let s1=nums[0],s2=Infinity,s3=Infinity
    for(let i=1;i<nums.length;i++){
        if(nums[i]<s2){
            s3=s2
            s2=nums[i]
        }else if (nums[i]<s3) s3=nums[i]
    }
    return s1+s2+s3
};