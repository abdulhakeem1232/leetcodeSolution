/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function(password) {
    let str=[...new Set(password)].join('')
    let strength=0
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122) strength+=1
        else if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90) strength+=2
        else if(str[i]>=0&&str[i]<=9) strength+=3
        else strength+=5
    }
    return strength
};