var findSubarrays = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length - 1; i++) {
        if (obj.hasOwnProperty(nums[i] + nums[i + 1])) {
            return true
        }
            obj[nums[i] + nums[i + 1]]=true
        else {
        }
    }
    return false
};
[
