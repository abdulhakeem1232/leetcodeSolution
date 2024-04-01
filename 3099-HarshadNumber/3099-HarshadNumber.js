/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arr=x.toString().split(''),sum=0
    for(let i=0;i<arr.length;i++){
        sum+=Number(arr[i])
    }
    return x%sum==0?sum:-1
};
1
