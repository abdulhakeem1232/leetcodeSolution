/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var rotateElements = function(nums, k) {
    let pos=[],neg=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0) pos.push(nums[i])
        else neg.push(nums[i])
    }
    if(pos.length==k) return nums
    let rotate=k%pos.length
    let newarr=pos.slice(rotate).concat(pos.slice(0,rotate))
   let res=[],p=0,n=0
   for(let i=0;i<nums.length;i++){
    if(nums[i]>=0){
        res.push(newarr[p])
        p++
    }else{
        res.push(neg[n])
        n++
    }
   }
   return res

};