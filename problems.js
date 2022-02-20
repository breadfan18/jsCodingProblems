  /*
  ### Challenge: 07-reverseUpcaseString
  
  **Difficulty:** Basic
  
  Prompt:
  
  > Write a function called reverseUpcaseString that accepts a single string argument, then returns the string 
  > with its characters in reverse order and converts all characters to uppercase.
  
  Examples:
  
  reverseUpcaseString("SEI Rocks!"); --> "!SKCOR IES" 
  */

  // Your solution for 06-range here:
function reverseUpcaseString(str) {
  // We can either do a reverse loop and concat each char to a new string output. uppercasing each chat before adding
  return str.split('').reverse().join('').toUpperCase()
}




console.log(reverseUpcaseString('SEI Rocks!'))


console.log('swaroop'.length)
