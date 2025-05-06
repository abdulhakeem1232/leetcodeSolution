/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let res=[cost[0]]
    for(let i=0;i<cost.length;i++)
        res[i]=res[i-1]<cost[i]?res[i-1]:cost[i]
    return res
};