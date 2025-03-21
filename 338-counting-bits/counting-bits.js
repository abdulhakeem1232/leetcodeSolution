/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    function binaryCount(binary){
        count=0
        for(let i=0;i<binary.length;i++){
            if(binary[i]==1) count++
        }
        return count
    }
    let ans=[]
    for(let j=0;j<=n;j++){
        ans[j]=binaryCount(j.toString(2))
    }
    return ans
};