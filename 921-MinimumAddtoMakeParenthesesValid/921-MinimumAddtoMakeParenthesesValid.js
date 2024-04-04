 */
var minAddToMakeValid = function(s) {
    let stack=[],count=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push('(')
        }else if(s[i]==')'){
            if(stack.length) stack.pop()
        }
    }
    return stack.length+count
            else count++
};
"
