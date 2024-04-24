 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n,memo=[]) {
    if(n<=0) return 0
    else if(n==1||n==2) return 1
    memo[n]= tribonacci(n-1,memo)+tribonacci(n-2,memo)+tribonacci(n-3,memo)
/**
    else if(memo[n]) return memo[n]
    return memo[n]
};
4
