/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
   let binary=n.toString(2)
   binary=binary.padStart(32,0).split('').reverse().join('')
   return parseInt(binary,2)
    
};