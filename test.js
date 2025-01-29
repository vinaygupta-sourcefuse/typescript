// Declare a function with typing for arguments and return type
function greet(name, age) {
    return "Hello, my name is ".concat(name, " and I am ").concat(age, " years old.");
}
// Define variables with types
var userName = "Alice";
var userAge = 25;
// Call the function
var message = greet(userName, userAge);
// Output the result
console.log(message);
