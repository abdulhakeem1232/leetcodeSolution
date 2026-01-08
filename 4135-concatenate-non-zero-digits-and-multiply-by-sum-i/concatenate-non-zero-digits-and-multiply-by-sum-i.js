/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let sum = 0, x = '', num = n.toString()
    for (let i = 0; i < num.length; i++) {
        console.log(num[i], i)
        if (num[i] != '0') {
            sum +=Number(num[i])
            x += num[i]
        }
    }
    console.log(sum, x)
    return sum * x
};