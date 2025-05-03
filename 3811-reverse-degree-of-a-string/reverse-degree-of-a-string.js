/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res=0
    for(let i=0;i<s.length;i++){
        res+=(27-(s.charCodeAt(i)-96))*(i+1)
    }
    return res
};