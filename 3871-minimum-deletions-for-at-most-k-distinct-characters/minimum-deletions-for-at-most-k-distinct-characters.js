/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    let fre={}
    for(let i=0;i<s.length;i++){
        fre[s[i]]=(fre[s[i]]||0)+1 
    }
    let sorted=Object.entries(fre).sort((a,b)=>a[1]-b[1])
    if(sorted.length<=k) return 0
    let del=0
    while(sorted.length>k){
        sorted[0][1]--
        if(sorted[0][1]==0) sorted.splice(0,1)
        del++
    }
    return del
};