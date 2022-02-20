  /*
  ### Challenge: 04-addList
  
  **Difficulty:** Basic
  
  Prompt:
  
  > Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
  > Assume all parameters will be numbers.
  > If called with no arguments, return 0 (zero).
  
  Examples:
  
  add(1) --> 1
  add(1,50,1.23) --> 52.23
  add(7,-12) --> -5
  */
  // Your solution for 04-addList here:
function addList() {
  console.log(arguments);

  return Array.prototype.slice.call(arguments).reduce((sum, num) => sum+= num, 0)
}



console.log(addList(1,50,1.23))
