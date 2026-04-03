/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words=text.split(' '),deleted=0
    for(let i=0;i<words.length;i++){
        for(let j=0;j<brokenLetters.length;j++){
            if(words[i].includes(brokenLetters[j])){
                deleted++
                break;
            }
        }
    }
    return words.length-deleted
};