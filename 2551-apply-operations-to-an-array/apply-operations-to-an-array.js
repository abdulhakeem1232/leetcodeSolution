/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            nums[i]=nums[i]*2
            nums[i+1]=0
        }
    }
    return shiftZeroToEnd(nums)

    function shiftZeroToEnd(arr){
        let res=[],zeroCount=0
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=0) res.push(arr[i])
            else zeroCount++
        }
        while(zeroCount>0){
            res.push(0)
            zeroCount--
        }
        return res
    }
};