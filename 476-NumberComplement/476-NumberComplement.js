/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary=num.toString(2)
    let compliment=''
    for(let i=0;i<binary.length;i++){
        compliment+=binary[i]=='0'?1:0
    }
    return parseInt(compliment,2)
};
5
