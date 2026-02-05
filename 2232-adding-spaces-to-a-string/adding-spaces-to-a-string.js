/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result='',j=0
    for(let i=0;i<s.length;i++){
        if(i==spaces[j]){
            result+=" "
            j++
        }
        result+=s[i]
    }
    return result
};