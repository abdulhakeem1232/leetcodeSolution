/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    if(n<=k && m<=k) return 0
    let cost=0
    if(n>k){
        cost=(n-k)*k
    }
    if(m>k){
        cost+=(m-k)*k
    }
    return cost
};