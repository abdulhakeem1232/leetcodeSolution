/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
    let acount=0,bcount=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='a') acount++
        else bcount++
    }
    return Math.abs(acount-bcount)
};