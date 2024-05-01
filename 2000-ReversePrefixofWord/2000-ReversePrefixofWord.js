    let k=word.indexOf(ch)
    let str=""
    for(i=k;i>=0;i--){
        str+=word[i]
    }
    for(j=k+1;j<word.length;j++){
        str+=word[j]
    }
    return str
};
"abcdefd"
