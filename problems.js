  /*
  ### Challenge: 22-intersection
  
  **Difficulty:** Intermediate
  
  Prompt:
  
  > Write a function named intersection that accepts two arguments which are both arrays. 
  > The array arguments may contain any mixture of strings, numbers and/or booleans 
  > but no reference types, i.e., objects.
  > The function should return a new array containing all elements in common, 
  > including repeating element values.
  > The ordering of the elements in the returned is not important.
  > If there are no elements in the arrays in common,  the intersection 
  > function should return an empty array.
  > The function should not mutate (change) either argument.
  
  Examples:
  
  intersection(['a', 1], []) --> []
  intersection(['a', 1], [true, 'a', 15]) --> ['a']
  intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) --> [1, true, 1]
  */
  // Your solution for 22-intersection here:

  
  
  // Your solution for 20-isPrime here:
function intersection(arr1, arr2) {

  console.log(arr1.sort())
  let output = []
  let test = arr1.filter(element => {
    return arr2.includes(element)
  })

  return test

  }
  




console.log(intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]))

/* 
Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.

Examples

front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc
*/

// function frontBack(str){
//  if (str.length < 3) return str.repeat(3);
//  else return str.substring(0, 3).repeat(3)
// } 

// console.log(frontBack('ab'))
