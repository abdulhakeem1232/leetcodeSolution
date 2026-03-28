/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
  let min=Infinity
  for(let i=0;i<tasks.length;i++){
    let sum=tasks[i][0]+tasks[i][1]
    min=Math.min(min,sum)
  }  
  return min
};