/**
 * Before you can use a library, you have to install it for node to import it. To install a library, you have to know the name
 * Once you know the name you can say 
 * npm install <library name>
 * for eg you can type the following in terminal: npm install prompt
 */
// use the installed library called prompt
var prompt = require('prompt');

/**
 * 
 * () - parenthesis - this is used to pass parameters to a function
 * [] - square brackets - this usually denotes an array. An array is a set of things
 * {} - curly braces - start and end of a function or an object
 * ; - semi colon - this usually denotes end of a line
 * . - period - this denotes a function. It also denotes a property of an object. If it is a function it will have parenthesis, otherwise it is a property of an object
 * , - comma - it is a separator or a delimiter of things
 */
prompt.start();
/**
 * Take one number as input. Print if number 1 is greater than 100 or less than 100
 * 
 */
prompt.get(['num1'], function (err, result)  {
  function great(){
  }
  (great);
  function less(){
  }
  (less);
  function equal(){
  }
  (equal);
  var great = result.num1 > 100
var less = result.num1 < 100
var equal = result.num1 == 100
if (great == true)  {
  (result.num1 > 100);
  console.log(result.num1 + ' > 100');
  } else if (less == true)  {
  (result.num1 < 100);
console.log(result.num1 + ' < 100');
} else {
  (equal == 100);
console.log(result.num1 + ' = 100');
}
}); 