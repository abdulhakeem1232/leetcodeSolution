/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    let start=((startTime[0]+startTime[1])*60*60)+((startTime[3]+startTime[4])*60)+Number((startTime[6]+startTime[7]))
    let end=((endTime[0]+endTime[1])*60*60)+((endTime[3]+endTime[4])*60)+Number((endTime[6]+endTime[7]))
    return end-start

};