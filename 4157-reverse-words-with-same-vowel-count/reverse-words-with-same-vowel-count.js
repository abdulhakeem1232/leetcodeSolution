/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    function countVowels(s) {
        let vowels = 'aeiou', count = 0
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s[i])) count++
        }
        return count
    }
    let words = s.split(' ')
    let firtWordVowelCount, res = ''
    for (let i = 0; i < words.length; i++) {
        let vowelsCountOfWord = countVowels(words[i])
        if (i == 0) {
            firtWordVowelCount = vowelsCountOfWord
            res+=words[i]+' '
        }else if(vowelsCountOfWord==firtWordVowelCount) res+=words[i].split('').reverse().join('')+' '
        else res+=words[i]+' '
    }
    return res.trimEnd()
};