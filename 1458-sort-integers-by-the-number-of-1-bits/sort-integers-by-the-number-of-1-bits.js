/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    arr.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length; i++)
        if (result[countOnes(arr[i])] != undefined)
            result[countOnes(arr[i])].push(arr[i])
        else
            result[countOnes(arr[i])] = [arr[i]]
    return result.flat(Infinity)
    function countOnes(num) {
        let binary = num.toString(2), count = 0
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] == '1') count++
        }
        return count
    }
};