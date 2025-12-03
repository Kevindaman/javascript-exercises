const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};
/**
 * 
 * @param {Array} arr 
 */

const sum = function(arr) {
	let sum = 0;
  arr.forEach(num => sum += num)
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(num => sum *= num)
  return sum;
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
	let sum = 1;
  for(let i = num; i > 0; i--){
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
