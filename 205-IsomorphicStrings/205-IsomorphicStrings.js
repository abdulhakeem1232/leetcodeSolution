var isIsomorphic = function(s, t) {
    let obj1={},obj2={}
    for(let i=0;i<s.length;i++){
        if(obj1.hasOwnProperty([s[i]]) || obj2.hasOwnProperty([t[i]])){
           if(obj1[s[i]]!=obj2[t[i]]){
        }else{
            obj1[s[i]]=i
            return false
           }
            obj2[t[i]]=i
        }
    }
    return true
};
"
