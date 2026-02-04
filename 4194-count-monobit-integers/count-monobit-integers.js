/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
    let count=0
    for(let i=0;i<=n;i++){
        if(isMonobit(i)) count++
    }
    return count

    function isMonobit(num){
        let bin=num.toString(2)
        for(let j=1;j<bin.length;j++){
            if(bin[j]!=bin[j-1]) return false
        }
        return true
    }
};