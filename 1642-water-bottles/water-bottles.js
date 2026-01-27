/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result=numBottles,empty=numBottles
    numBottles=0
    while(empty>=numExchange){
            empty-=numExchange
            empty++
            result++
    }
    return result
};