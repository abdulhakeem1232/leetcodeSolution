/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let digitSum=(n)=>{
        let str=n.toString()
        let sum=0
        for(let i=0;i<str.length;i++){
            sum+=Number(str[i])
        }
        return sum
    }
    let productSum=function(n){
        let str=n.toString()
        let product=1
        for(let i=0;i<str.length;i++){
            product*=Number(str[i])
        }
        return product
    }
    return n%(digitSum(n)+productSum(n))==0
};