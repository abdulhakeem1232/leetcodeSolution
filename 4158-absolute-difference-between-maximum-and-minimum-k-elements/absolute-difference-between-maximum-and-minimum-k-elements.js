/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let sortedArray=nums.sort((a,b)=>a-b)
    let smallestSum=0,largestSum=0
    for(let i=0,j=sortedArray.length-1;i<k;i++,j--){
        smallestSum+=sortedArray[i]
        largestSum+=sortedArray[j]
    }
    return Math.abs(largestSum-smallestSum)
};