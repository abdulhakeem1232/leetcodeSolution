/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let result=0
    for(let i=0;i<mat.length;i++){
        let count=0,pos
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]==1){
                count++
                pos=j
            } 
        }
        if(count==1){
            let onesInROw= onesRow(pos)
            if(onesInROw==1) result++
        }
    }   

    function onesRow(row){
        let ones=0
        for(let i=0;i<mat.length;i++){
            if(mat[i][row]==1)ones++
        }
        return ones
    }
    return result
};