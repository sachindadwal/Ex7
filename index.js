var readlineSync= require('readline-sync');

var result=0;
function add(parameterOne, parameterTwo) {
  console.log('First number :'+parameterOne);
  console.log('Second number :'+parameterTwo)
  result=parameterOne+parameterTwo;
  return result;
}

console.log('Sum : '+add(10,20));