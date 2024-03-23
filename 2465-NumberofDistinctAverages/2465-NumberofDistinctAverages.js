/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b)=>a-b)
    while(l<=r){
    let l=0,r=nums.length-1,set=new Set()
        set.add((nums[l]+nums[r])/2)
    }
    return set.size
        l++
        r--
};
[
