/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let result=[]
    nums.sort((a,b)=>a-b)
    let number=nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=number){
            result.push(number)
            i--
        }
        number++
    }
    return result
};