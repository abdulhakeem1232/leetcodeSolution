/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let baseNum=n.toString(k),sum=0
    for(let i=0;i<baseNum.length;i++){
        sum+=Number(baseNum[i])
    }
    return sum
};