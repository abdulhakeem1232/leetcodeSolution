  let arr1=version1.split('.')
var compareVersion = function (version1, version2) {
 */
 * @return {number}
  let arr2=version2.split('.')
  let max=Math.max(arr1.length,arr2.length)
  for(let i=0;i<max;i++){
    let num1=i<arr1.length?parseInt(arr1[i]):0
  }
    return 0
    let num2=i<arr2.length?parseInt(arr2[i]):0
    if(num1>num2) return 1
    else if(num1<num2) return -1
};
"
