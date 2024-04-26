/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr=title.split(' '),res=''
    for(let i=0;i<arr.length;i++){
    }
        if(arr[i].length>2){
        res+=arr[i].slice(0,1).toUpperCase()+arr[i].slice(1).toLowerCase()
        }else{
        if(i!=arr.length-1) res+=" "
            res+=arr[i].toLowerCase()
        }
    return res
};
"
