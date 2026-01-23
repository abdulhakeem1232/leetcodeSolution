/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowelFre={},conFre={},vowels=['a','e','i','o','u']
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            vowelFre[s[i]]=(vowelFre[s[i]]||0)+1
        }else{
            conFre[s[i]]=(conFre[s[i]]||0)+1
        }
    }
   return (Math.max(...Object.values(vowelFre),0)+Math.max(...Object.values(conFre),0))
};