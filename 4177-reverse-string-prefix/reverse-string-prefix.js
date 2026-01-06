/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let pre=s.slice(0,k)
    let rem=s.slice(k,s.length)
    return pre.split('').reverse().join('').concat(rem)
};