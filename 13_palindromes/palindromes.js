/**
 * 
 * @param {string} string 
 */


const palindromes = function (string) {
    let reversedString = string.split("").filter(char => {
        if (char == "!" || char == "?" || char =="." || char == "," || char == " ") return false;
        else return true;
    }).reverse().join("").toLowerCase();

   
    string = string.replaceAll(/[!?.,]/g, "").replaceAll(" ", "").toLowerCase();
    
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
