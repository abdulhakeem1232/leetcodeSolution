/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    let sorted = capacity.filter((num) => num >= itemSize).sort((a, b) => a - b)
    if(sorted.length==0) return -1
    return capacity.indexOf(sorted[0])
};