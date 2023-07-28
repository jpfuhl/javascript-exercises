const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let total = 0;
  numbers.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(...args) {
  let total = 1;
  for (const arg of args) {
    total *= parseInt(arg);
  }
  return total;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	if (number < 0)
    return -1;
  else if (number == 0)
    return 1;
  else 
    return (number * factorial(number - 1));
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
