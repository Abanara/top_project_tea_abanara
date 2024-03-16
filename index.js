// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to calculate the square of a number
  function square(number) {
    return number * number;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    const num = 5;
    
    if (isEven(num)) {
      console.log(num + " is even.");
    } else {
      console.log(num + " is odd.");
    }
    
    console.log("Square of " + num + " is: " + square(num));
  }
  
  // Call the main function to execute the code
  main();
  