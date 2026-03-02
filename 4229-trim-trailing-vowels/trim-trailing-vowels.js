/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let stack=s.split(''),vowels=['a', 'e', 'i', 'o','u']
    while(vowels.includes(stack[stack.length-1])){
        stack.pop()
    }
    return stack.join('')
};