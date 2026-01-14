/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let ans=[]
    for(let i=0;i<boxes.length;i++){
        let minOp=0
        for(let j=0;j<boxes.length;j++){
            if(j==i)continue;
            if(boxes[j]=='1') minOp+=Math.abs(i-j)
        }
        ans.push(minOp)
    }
    return ans
};