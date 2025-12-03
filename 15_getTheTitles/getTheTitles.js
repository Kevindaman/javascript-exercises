const getTheTitles = function(arr) {
    let titlesArr = [];

    for (let book of arr){
        titlesArr.push(book.title);
    }

    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
