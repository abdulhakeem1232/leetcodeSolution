    for(let i=0;i<s.length;i++){
        if(s[i]=='(') count ++
        else if(s[i]==')'){
            count--
        }
    }
    return max
            max=max<count?count:max
};
    let max=0,count=0
var maxDepth = function(s) {
"
