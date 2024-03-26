/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let s=1
   let arr=nums.sort((a,b)=>a-b)
   for(i=0;i<arr.length;i++){
       if(arr[i]==s){
           s++
       }
[1,2,0]
