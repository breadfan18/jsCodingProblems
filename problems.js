  /*
  ### Challenge: 13-mumble
  
  **Difficulty:** Intermediate
  
  Prompt:
  
  > Write a function called mumble that accepts a single string argument.
  > The function should return a string that has each character repeated the number of times according to its position within the string arg.  
  > In addition, each repeated section of characters should be separated by a hyphen (-).
  > Examples describe it best..
  
  Examples:
  
  mumble('X'); --> 'X'
  mumble('abc'); --> 'a-bb-ccc'
  mumble('121'); --> '1-22-111'
  mumble('!A 2'); --> '!-AA>   -2222'
  */
  // Your solution for 13-mumble here:

function mumble(str) {
    // initialize an output variable, set it to empty string
    let output = '';
    // loop through input string, adding the char, repeated by the index number and concat it to output - separated by hyphen
    for (let i = 0; i < str.length; i++) {
        output += str.charAt(i).repeat(i+1).concat('-');
    }
    return output.slice(0, output.length-1)
}




console.log(mumble('boo'))
// console.log('test');
