/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let emptyBottle=numBottles,res=numBottles
    while(emptyBottle>=numExchange){
        emptyBottle-=numExchange
        emptyBottle++
        numExchange++
        res++
    } 
    return res
};