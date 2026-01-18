/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let v=0,c=0,vowels=['a','e','i','o','u']
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i]))v++
        else if(isNaN(s[i])&&s[i]!=' ') c++
    }
    if(c>0) return Math.floor(v/c)
    return 0
};