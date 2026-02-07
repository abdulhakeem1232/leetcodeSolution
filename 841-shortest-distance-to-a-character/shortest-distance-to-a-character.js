/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let index=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==c)index.push(i)
    }
    let result=[]
    for(let i=0;i<s.length;i++){
        result.push(findClosest(i))
    }
    return result

    function findClosest(i){
        let min=Infinity
        for(j=0;j<index.length;j++){
            min=Math.min(min,Math.abs(i-index[j]))
        }
        return min
    }
};