/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    function isPrime(n){
        if(n==1) return false
        if (n==2 || n==3) return true
        for(let i=2;i<=n/2;i++){
            if(n%i==0) return false
        }
        return true
    }
    let obj={}
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]=(obj[nums[i]]||0)+1
    }
    for(let key in obj){
        if(isPrime(obj[key]))
            return true 
    }
    return false
};