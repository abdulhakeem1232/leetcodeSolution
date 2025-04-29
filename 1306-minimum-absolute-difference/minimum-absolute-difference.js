/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let min=Infinity,res=[]
    arr.sort((a,b)=>a-b)
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]<min){
            res=[]
            min=arr[i]-arr[i-1]
            res.push([arr[i-1],arr[i]])
        }else if(arr[i]-arr[i-1]==min){
            res.push([arr[i-1],arr[i]])
        }
    }
        return res
};