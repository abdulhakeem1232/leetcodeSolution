/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function (responses) {
    let fre = {}
    for (let i = 0; i < responses.length; i++) {
        let set = new Set(responses[i])
        for (let item of set)
            fre[item] = (fre[item] || 0) + 1
    }
    let max = 0, same = []
    for (let item in fre) {
        if (fre[item] > max) {
            same=[]
            max = fre[item]
            same.push(item)
        } else if (fre[item] == max) {
            same.push(item)
        }
    }
    if (same.length == 1) return same[0]
    return findLexogical(same)

    function findLexogical(arr) {
        let smallestLength = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < smallestLength)
                smallestLength = arr[i]
        }
        return smallestLength
    }
};