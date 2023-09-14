const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  let total = 0;
  for(const a of arr){
    total += a;

  }
  return total;
	
};

const multiply = function(arr) {
  let total = 1;
  for(const a of arr){
    total *= a;

  }
  return total;


};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a==0 || a == 1){return 1;}
  let total = 1;
  while (a>0){
    total = total*a;
    a--;
  }
  return total;

	
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
