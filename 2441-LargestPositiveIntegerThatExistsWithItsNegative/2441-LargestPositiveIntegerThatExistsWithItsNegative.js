/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let arr=nums.sort((a,b)=>a-b)
    let i=arr.length-1
    while(i>0){
        let value=arr[i]
        if(arr.includes(-value)){
            return value
        }
        i--
    }
    return -1
};
[-1,2,-3,3]
