/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let fre={}
    for(let i=0;i<nums.length;i++)
    fre[nums[i]]=(fre[nums[i]]||0)+1
    let res=[]
    for(let key in fre){
        for(let i=0;i<fre[key];i++){
            if(!res[i]) res[i]=[]
            res[i].push(Number(key))
        }
    }
    return res
};