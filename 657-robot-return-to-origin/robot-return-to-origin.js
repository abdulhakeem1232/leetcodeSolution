/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let row=0,col=0
    for(let i=0;i<moves.length;i++){
        if(moves[i]=='U')row--
        else if(moves[i]=='D')row++
        else if(moves[i]=='L')col--
        else if(moves[i]=='R')col++
    }
    return row==0 && col==0
};