/*
 Declare and initialise three variables with appropriate names and values. One variable with a number value, one with a boolean value and one with a string value.
*/

var power = 100;
var name = "Thor";
var worthy = true;

/*
 Declare two variables. Assign your first name to one of the variables and your last name to the other. Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.
*/

var firstName = "Joakim Lee";
var lastName = "Sletten";

var fullName = firstName + " " + lastName;

console.log(fullName);

/*
 Check the type of the value "frog" with the typeof operator and assign the result to a variable. Console log the variable value with a label, e.g. “The type of frog is ___”.
*/

var checkValue = "frog";
var varType = typeof checkValue;

console.log("the type of frog is " + varType);

/*
 Declare and initialise a variable called orderHasShipped with a boolean value. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "The order shipped". If not, console log the string value "The order did not ship". 
*/

var orderHasShipped = true;

if (orderHasShipped === true) {
  console.log("the order is shipped");
} else {
  console.log("The order did not ship");
}

/*
 Create a for loop that counts from 7 to 13. Console log the value of the counter variable inside the loop.
*/

for (var count = 7; count <= 13; count++) {
  console.log(count);
}
