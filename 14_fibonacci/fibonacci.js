const fibonacci = function(num) {
    if(num == 0){
        return 0;
    }
    if (num < 0){
        return "OOPS";
    }
    let a = 1;
    let b = 1;
    if(num == 1 || num == 2) return 1;
    else{
        num -= 2;
        while(num > 0){
            let temp = b;
            b = b + a;
            a = temp;
            num--;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
