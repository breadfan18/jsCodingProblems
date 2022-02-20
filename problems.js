/*
  ### Challenge: 06-range
  
  **Difficulty:** basic
  
  Prompt:
  
  > Write a function called range that accepts two integers as arguments and returns an array of 
  > integers starting with the first argument up to one less than the second argument.
  > The range function must be called with the first argument less than or equal to the second argument, 
  > otherwise return the string "First argument must be less than second".
  
  Examples:
  
  range(1,4) --> [1,2,3]
  range(-2, 3) --> [-2,-1,0,1,2]
  range(1,1) --> []
  range(5,2) --> "First argument must be less than second"
  */
  // Your solution for 06-range here:
function range(num1, num2) {
  // If num1 is greater than num2, retrun the given string 
  if(num1 > num2) return 'First argument must be less than second'
  // Declare a new array variable
  let arr = [];
  // loop over starting loop with num1, ending less than num2, push to an array each value of i. 
  for (let i = num1; i < num2; i++) {
    arr.push(i)
  }

  return arr;
}




console.log(range(1,4))


