/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let numbers = n.toString().split(''), digitSum = 0, squareSum = 0
    for (let i = 0; i < numbers.length; i++) {
        digitSum += Number(numbers[i])
        squareSum += (numbers[i] * numbers[i])
    }
    return (squareSum - digitSum) >= 50
};