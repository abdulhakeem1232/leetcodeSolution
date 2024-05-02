 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let obj={}
    for(let elem of nums){
        obj[elem]=(obj[elem]||0)+1
    }
    let res=[]
    for(let i=1;i<=nums.length;i++){
        if(!obj[i]) res.push(i)
    }
    return res
};
[
