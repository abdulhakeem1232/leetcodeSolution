/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let binary=n.toString(2),flip=''
    for(let i=0;i<binary.length;i++){
        if(binary[i]=='1') flip+='0'
        else flip+='1'
    }
    return parseInt(flip,2)
};