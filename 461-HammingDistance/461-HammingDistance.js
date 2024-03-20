 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xArr=x.toString(2).split('').reverse()
    let yArr=y.toString(2).split('').reverse()
    while(xArr.length<yArr.length){xArr.push(0)}
    while(yArr.length<xArr.length){yArr.push(0)}
    let count=0
    for(let i=0;i<xArr.length;i++){
        if(xArr[i]!=yArr[i]) count++
    }
    return count
};
1
