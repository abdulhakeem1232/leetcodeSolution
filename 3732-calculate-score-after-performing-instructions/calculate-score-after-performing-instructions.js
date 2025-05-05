/**
 * @param {string[]} instructions
 * @param {number[]} values
 * @return {number}
 */
var calculateScore = function(instructions, values) {
    let i=0,score=0,visited={}
    while(true){
        visited[i]=true
        if(instructions[i]=='add'){
            score+=values[i]
            i++
        }else{
            i+=values[i]
        }
        if(visited.hasOwnProperty(i)||i>=values.length||i<1) break
    }
    return score
};