/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
    let fre = {}
    let str = n.toString()
    for (let i = 0; i < str.length; i++)
        fre[str[i]] = (fre[str[i]] || 0) + 1
    let res = Infinity, leastFre = Infinity
    for (let key in fre) {
        if (fre[key] <= leastFre) {
            if (fre[key] == leastFre && key < res) {
                res = key
            } else if (fre[key] < leastFre) {
                res = key
                leastFre = fre[key]
            }
        }
    }
    return Number(res)
};