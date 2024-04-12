/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1)
    return true
    for(i=1;i<=num/2;i++){
        if((i*i)==num){
            return true
        }
    }
        else if(i*i>num) break;
1
