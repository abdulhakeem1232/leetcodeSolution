/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans=[]
    for(let i=0;i<nums.length;i++)
    ans.push(minBitwiseNum(nums[i]))
    return ans
};

function minBitwiseNum(n){
    if(n==1) return -1
    let j=1
    while (j<n){
        if((j|j+1)==n)
        return j
         j++
    }
    return -1
}