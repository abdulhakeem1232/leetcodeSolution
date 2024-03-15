var findPeakGrid = function(mat) {
    let max=-Infinity,index=[]
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]>max){
        }
                index=[i,j]
            }
    }
                max=mat[i][j]
    return index
};
[
