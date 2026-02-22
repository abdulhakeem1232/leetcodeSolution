/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary=n.toString(2),max=0,last=0
    for(let i=1;i<binary.length;i++){
        if(binary[i]=='1') {
            max=Math.max(max,(i-last))
            last =i
        }
    }
    return max
};