
function multiplyByTen(num) {
  var result = num * 10;
  return result;
}


function subtractFive(num) {
  var result = num - 5;
  return result;
}


function areSameLength(str1, str2) {
  if (str1.length == str2.length) {
    return true;
  } else {
    return false;
	}
}
areSameLength('def', 'def');


function areEqual(x, y) {
  if (x == y) {
    return true;
  } else {
    return false;
	}
}
areEqual(5, 5);


function lessThanNinety(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
	}
}
lessThanNinety(100);


function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
	}
}
greaterThanFifty(100);


function add(x, y) {
  var result = x + y;
  return result;
}
add(5, 5);


function subtract(x, y) {
  var result = x - y;
  return result;
}
subtract(5, 5);


function divide(x, y) {
  var result = x / y;
  return result;
}
divide(5, 5);


function multiply(x, y) {
  var result = x * y;
  return result;
}
multiply(5, 5);


function getRemainder(x, y) {
  var result = x % y;
  return result;
}
getRemainder(7, 5);


function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
	}
}
isEven(4);


function isOdd(num) {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
	}
}
isOdd(3);


function square(num) {
  var result = num * num;
  return result;
}
square(2);


function cube(num) {
  var result = num * num * num;
  return result;
}
cube(3);


function raiseToPower(num, exponent) {
 var result = Math.pow(num, exponent);
  return result;
}
raiseToPower(3, 3);


function roundNumber(num) {
  var result = Math.round(num);
  return result;
}
roundNumber(2.22);


function roundUp(num) {
  var result = Math.ceil(num);
  return result;
}
roundUp(34.77);


function addExclamationPoint(str) {
  var result = str + '!';
  return result;
}
addExclamationPoint('Hello World');


function combineNames(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
combineNames('Art', 'Linkletter');


function getGreeting(name) {
 var result = 'Hello ' + name + '!';
 return result;
}
getGreeting('Artie');

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var result = length * width;
  return result;
}
getRectangleArea(3, 4);


function getTriangleArea(base, height) {
  var result = (base * height) / 2;
  return result;
}
getTriangleArea(3, 5);


function getCircleArea(radius) {
 var result = Math.round(Math.PI * (Math.pow(radius, 2)));
 return result;
}
getCircleArea(5);


function getRectangularPrismVolume(length, width, height) {
  var result = (length * width * height);
  return result;
}
getRectangularPrismVolume(3, 4, 5);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
