/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    nums = nums.map(n => Math.abs(n)).sort((a, b) => a - b);
    let score=0,index=0,left=0,right=nums.length-1
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            score+=nums[right]*nums[right]
            right--
        }else{
            score-=nums[left]*nums[left]
            left++
        }
    }
    return score
};