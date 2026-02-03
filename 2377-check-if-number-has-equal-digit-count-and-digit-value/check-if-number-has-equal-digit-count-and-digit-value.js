/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let fre={}
    for(let i=0;i<num.length;i++){
        fre[num[i]]=( fre[num[i]]||0)+1
    }
    for(let i=0;i<num.length;i++){
        if((fre[i]||0)!=num[i]) 
         return false 
    }
    return true
};