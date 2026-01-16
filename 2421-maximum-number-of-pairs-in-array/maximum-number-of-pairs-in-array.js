/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let fre = {}, pair = 0, rem = 0
    for (let i = 0; i < nums.length; i++)
        fre[nums[i]] = (fre[nums[i]] || 0) + 1

    for (let key in fre) {
        if(fre[key]%2==0){
            pair+=fre[key]/2
        }else{
            pair+=parseInt(fre[key]/2)
            rem++
        }
    }
    return [pair,rem]
};