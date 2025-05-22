/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let sum=sumOfDigits(nums[i].toString())
        if(sum==i) return i
    }
    return -1
    function sumOfDigits(num){
        let sum=0
        for(let i=0;i<num.length;i++) sum+=Number(num[i])
        return sum
    }
};