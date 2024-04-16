/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  let res='',arr=[]
  for(let i=0;i<s.length;i++){
    if(s[i]!='i') arr.push(s[i])
  }  
    else arr.reverse()
  return arr.join('')
};
"
