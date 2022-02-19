/*
### Challenge: 29-addChecker
 
**Difficulty:**  Intermediate
 
Prompt:
 
> Write a function called addChecker that accepts two arguments.
> The first argument is an array containing at least two integers.  The integers in the array 
> are sorted in ascending order.
> The second argument is an integer.
> The addChecker function should return true if there are two integers in the array of integers 
> (first argument) that when added together, equals the integer passed in as the second argument.
> If there are no two integers in the array that sum up to equal the second argument,
> addChecker should return false.
 
Hint:
 
> An efficient solution can leverage the the fact that the integers in the array are sorted.
 
Examples:
 
addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
*/
// Your solution for 29-addChecker here:
function addChecker(arr, int) {
  // Iterate through the array 
  // in each iteration, 
  // -- difference = arr[idx] - int
  // -- check if the rest of the array includes the difference number
  // ----- if yes, return true
  // ----- if  no, continue iteration 

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

  }

}


// console.log(addChecker([ ['ABC', 999], ['XY', 89] ]))

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


let test = 'lleah';

function findFirstUnique(str){

  //get an object with a count for each string
  //in the object look for the first key that has a value of 1
  const strArr = str.split('');

  const strObj = strArr.reduce((obj, char) => {
   obj[char] ? obj[char]++ : obj[char] = 1
   return obj;
  }, {})

  for (let key of Object.keys(strObj)){
    if(strObj[key] === 1) return str.indexOf(key)
  }
}

// function findFirstUnique(s) {
//   let str = s.split('')
//   let isUnique;
//   let output = 0;
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
  
//     for (let j = 1; j < str.length; j++) {
//       const nextChar = str[j];
//       if (currentChar === nextChar) {
//         isUnique = false;
//         break;
//       }
//       else isUnique = true
//     }

//     if (isUnique) output = i
//   }
//   return output
// }

console.log(findFirstUnique(test))

// loop1:
// for (var i in set1) {
//   loop2:
//   for (var j in set2) {
//     loop3:
//     for (var k in set3) {
//       break loop2;  // breaks out of loop3 and loop2
//     }
//   }
// }
