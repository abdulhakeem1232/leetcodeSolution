/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    let curr={}
    for(let i=0;i<bulbs.length;i++){
        curr[bulbs[i]]=!curr[bulbs[i]]
    }
    let res=[]
    for(let key in curr){
        if(curr[key]) res.push(Number(key))
    }
    return res
};