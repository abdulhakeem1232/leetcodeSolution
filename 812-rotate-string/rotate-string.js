/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!=goal.length) return false
    let arr=s.split('')
    for(let i=0;i<s.length;i++){
        if(goal==(arr.push(arr.shift()),arr.join(''))) return true
    }
    return false
};