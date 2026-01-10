/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
   let binary =n.toString(2) ,flips=0
   for(let i=0,j=binary.length-1;i<=j;i++,j--){
    if(binary[i]==binary[j]) continue
    else if(i!=j) flips+=2
    else flips++
   }
   return flips
};