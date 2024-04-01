/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    for(let i=0;i!=b;i=i>b?--i:++i){
        b<0?a--:a++
    }
    return a
};
1
