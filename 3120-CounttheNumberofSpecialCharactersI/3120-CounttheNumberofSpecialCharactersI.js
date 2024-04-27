/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let counted=new Set(),count=0
    for(let i=0;i<word.length;i++){
        if(!counted.has(word[i])&& word.indexOf(alter)!=-1){
        let values=word[i].charCodeAt(0)
        let alter=values>90?word[i].toUpperCase():word[i].toLowerCase
            count++
            counted.add(word[i])
            counted.add(alter)
        }
        }
        return count
};
"
