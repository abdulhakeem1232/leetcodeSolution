/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    let hexadecimal=(n*n).toString(16)
    let hexatrigesimal=(n*n*n).toString(36)
    return hexadecimal.concat(hexatrigesimal).toUpperCase()
};