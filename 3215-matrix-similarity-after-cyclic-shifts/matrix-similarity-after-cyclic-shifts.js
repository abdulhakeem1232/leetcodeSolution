/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    let rotate=k%mat[0].length
    let copy = mat.map(row => [...row])
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<rotate;j++){
            if(i%2==0){
                let elem=mat[i].shift()
                mat[i].push(elem)
            }else{
                let elem=mat[i].pop()
                mat[i].unshift(elem)
            }
        }
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(copy[i][j] !== mat[i][j]) return false
        }
    }

    return true
};