 */
var findDuplicates = function(nums) {
    let res=[]
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]) res.push(nums[i])
        else obj[nums[i]]=1
    }
    return res
};
[4,3,2,7,8,2,3,1]
