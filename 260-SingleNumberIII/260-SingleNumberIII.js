    for(let i=0;i<nums.length;i++){
        if(nums[i]!=nums[i-1]&& nums[i]!=nums[i+1]){
            arr.push(nums[i])
        }
        if(arr.length==2) return arr
    }
};
    let arr=[]
    nums.sort((a,b)=>a-b)
var singleNumber = function(nums) {
[
