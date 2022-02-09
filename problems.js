  /*
  ### Challenge: 08-removeEnds
  
  **Difficulty:** Basic
  
  Prompt:
  
  > Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
  > If the length of the string argument is less than 3, return an empty string.
  
  Examples:
  
  > removeEnds('SEI Rocks!'); --> "DI Rocks"
  > removeEnds('a'); --> "" (empty string)
  */

function removeEnds(str) {
    //First handle the condition so if str.length < 3, return ''
    if(str.length < 3) return '';
    //Then we can use the substring method to return the part of string removing the first and last 
    // so the substring will be str.substring(1, str.length-2)
    return str.substring(1, str.length-1)
    
    

}


console.log(removeEnds('swaroop'))
// console.log('test');
