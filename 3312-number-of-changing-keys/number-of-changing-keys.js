/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let lower=s.toLowerCase(),res=0
    for(let i=1;i<lower.length;i++){
        if(lower[i]!=lower[i-1]) res++
    }
    return res    
};