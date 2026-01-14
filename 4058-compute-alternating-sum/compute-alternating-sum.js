/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
    let flag = true, ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (flag) {
            ans -= nums[i]
            flag=false
        }else{
            ans+=nums[i]
            flag=true
        }
    }
    return ans
};