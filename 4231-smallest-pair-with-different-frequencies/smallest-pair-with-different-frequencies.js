/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
    if(nums.length<3) return [-1,-1]
    let fre={}
    for(let i=0;i<nums.length;i++){
        fre[nums[i]]=(fre[nums[i]]||0)+1
    }
    let minFre,flag=true,result=[]
    for(let key in fre){
        if(flag){
            minFre=fre[key]
            flag=false
            result.push(Number(key))
            continue
        }
        if(fre[key]!=minFre) result.push(Number(key))
        if(result.length==2) break
    }
    if(result.length==2) return result
    return [-1,-1]
};