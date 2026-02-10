/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function(nums) {
    let stack=[]
    for(let i=0;i<nums.length;i++){
        if(stack.length&&stack[stack.length-1]==nums[i]){
            let sum=nums[i]
            while(stack[stack.length-1]==sum){
                stack.pop()
                sum=sum*2
            }
            stack.push(sum)
        }else{
            stack.push(nums[i])
        }
    }
    return stack


};