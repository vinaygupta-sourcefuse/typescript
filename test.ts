// Declare a function with typing for arguments and return type
function greet(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  
  // Define variables with types
  let userName: string = "Alice";
  let userAge: number = 25;
  
  // Call the function
  let message: string = greet(userName, userAge);
  
  // Output the result
  console.log(message);
  