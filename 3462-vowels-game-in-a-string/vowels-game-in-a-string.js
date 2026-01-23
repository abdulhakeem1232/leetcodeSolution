/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
 let count=0,vowels=['a','e','i','o','u']
 for(let i=0;i<s.length;i++) 
    if(vowels.includes(s[i])) count++
if(count==0) return false
return true
};