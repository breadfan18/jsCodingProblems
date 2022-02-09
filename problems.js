/*
  ### Challenge: 12-hammingDistance
  
  **Difficulty:** Intermediate
  
  Prompt:
  
  In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
  
  > Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
  > The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
  > If the strings are not of the same length, the function should return NaN.
  
  Examples:
  
  hammingDistance('abc', 'abc'); --> 0
  hammingDistance('a1c', 'a2c'); --> 1
  hammingDistance('!!!!', '****'); --> 4
  hammingDistance('abc', 'ab'); --> NaN
  */
  // Your solution for 12-hammingDistance here:

function hammingDistance(a, b) {
    // first, if the strings are not of the same length return NaN
    if(a.length !== b.length) return NaN;
    // if strings ARE of same length
    // -- declare a counter variale to count differences. 
    let counter = 0;
    // -- loop thorugh the first string, comparing the charAt each index position to the charAt the same index position of the second string 
    for (let i = 0; i < a.length; i++) {
        // -- IF they are different, increase the counter
        if(a.charAt(i) !== b.charAt(i)) counter++;
    }
    return counter;
}


console.log(hammingDistance('!!!!', '***'))
// console.log('test');
