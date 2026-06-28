/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events) {
    let score = 0, counter = 0
    for (let i = 0; i < events.length; i++) {
        switch (events[i]) {
            case "0": score = score + 0;
                break;
            case "1": score = score + 1;
                break;
            case "2": score = score + 2;
                break;
            case "3": score = score + 3;
                break;
            case "4": score = score + 4;
                break;
            case "6": score = score + 6;
                break;
            case "W": counter = counter + 1;
                break;
            case "WD": score = score + 1;
                break;
            case "NB": score = score + 1;
                break;
        }
        if (counter==10) break;
    }
    return [score, counter]
};