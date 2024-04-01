 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let c=0
    let ts=s.trim()
    for(i=0;i<ts.length;i++){
        c++;
        if(ts[i]==" "){
            c=0
        }
    }
    return c
};
"Hello World"
