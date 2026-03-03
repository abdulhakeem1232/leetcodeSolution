/**
 * @param {number} n
 * @return {number}
 */
var minCost = function(n) {
    let y=n-1
    let cost=y
    while(y>1){
        y--
        cost+=y
    }
    return cost
};