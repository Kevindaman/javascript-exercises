/**
 * 
 * @param {string} string 
 * @param {number} num 
 */

const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }

    let fullWord = "";

    for (let i = 0; i < num; i++){
        fullWord = fullWord + string;
    }

    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
