/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let l1=0,l2=0
    let num=n.toString()
    for(let i=0;i<num.length;i++){
        if(num[i]>=l1){
            l2=l1
            l1=num[i]
        }else if (num[i]>l2) l2=num[i]
    }
    return l1*l2
};