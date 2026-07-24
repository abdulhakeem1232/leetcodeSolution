/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    let res=[],str=''
    for(let i=0;i<target.length;i++){
        let value=target.charCodeAt(i)
        for(let j=97;j<=122;j++){
            if(value==j){
                str+=String.fromCharCode(j)
                res.push(str)
                break;
            }else{
                res.push(str+String.fromCharCode(j))
            }
        }
    }
    return res
};