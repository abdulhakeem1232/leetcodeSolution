/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function(n) {
    let rev=n.toString().split('').reverse().join('')
    let min=Math.min(n,rev),max=Math.max(n,rev)
    let primes=[]
    for(let i=min;i<=max;i++){
        if(isPrime(i)) primes.push(i)
    }
    function isPrime(n){
        if(n==2) return true
        if(n==1 ||(n%2)==0) return false
        for(let i=3;i<=Math.sqrt(n);i++){
            if(n%i==0) return false
        }
        return true
    }
    let res=primes.reduce((acc,cur)=>{
       return acc+cur
    },0)
    return res
};