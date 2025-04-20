/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPossibleSize = function(nums) {
    let stack=[]
    for(let i=0;i<nums.length;i++){
        stack.push(nums[i])
        if(stack.length>=2 && stack[stack.length-1]<stack[stack.length-2])
         stack.pop()
    }
    return stack.length
};
