/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function(nums) {
    let fre=new Map(),freOffre=new Map()
    for(let i=0;i<nums.length;i++){
        fre.set(nums[i],(fre.get(nums[i])||0)+1)
    }
   for(let [key,value] of fre){
    freOffre.set(value,(freOffre.get(value)||0)+1)
   }
    let uniqueFre=-1
    for(let [key,value] of freOffre){
        if(value==1){
            uniqueFre=key
            break;
        }
    }
    if(uniqueFre==-1) return -1
    for(let [key,value] of fre){
        if(value==uniqueFre) return key
    }
};