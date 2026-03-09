/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let right=0
    for(let i=1;i<=n;i++){
        right+=i
    }
    let left=0,i=1
    while(left<right){
        left+=i
        right-=(i-1)
        if(left==right) return i
        i++   
    }
    return -1
};