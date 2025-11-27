/**
 * 
 * @param {Array} array 
 * @param {number} num 
 */



const removeFromArray = function(array, ...items) {
    let newArray = array;
    for(const item of items){
        newArray = newArray.filter((i) => i !== item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
