/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let max=0
    for(let i=0;i<s.length;i++){
         let set=new Set()
       for(let j=i+1;j<s.length;j++){
    }
        if(!set.has(s[j])){
       }
         set.add(s[i])
         set.add(s[j])
        }else break
    return max
       max=set.size>max?set.size:max
};
"
