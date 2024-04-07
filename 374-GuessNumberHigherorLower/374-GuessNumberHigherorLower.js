 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start=0,end=n
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        let status=guess(mid)
        if (status==0) return mid
        else if(status==1) start=mid+1
        else end=mid-1
    }
1
