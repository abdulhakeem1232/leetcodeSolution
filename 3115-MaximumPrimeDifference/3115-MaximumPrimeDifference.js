}
let min,max
for(let i=0;i<nums.length;i++){
    if(isPrime(nums[i])==true && min==undefined){
        min=i;
        max=i
    }
    else if(isPrime(nums[i])==true){
        max=i
    }
} 
return max-min
};
[
