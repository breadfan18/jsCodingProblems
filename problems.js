/*
### Challenge: 02-addTwoNumbers

**Difficulty:** Basic  

Prompt:

Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) --> 15
addTwoNumbers(10, -2) --> 8
addTwoNumbers(0, 0) --> 0
addTwoNumbers('Hello', 5) --> NaN
*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(num1, num2) {
    return typeof(num1) === 'number' && typeof(num2) === 'number' ? num1 + num2 : NaN
}

console.log(addTwoNumbers('best', 'test'))