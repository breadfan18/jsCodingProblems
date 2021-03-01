
### Challenge: 01-addOne

Difficulty: Basic

Prompt:
> Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

> addOne(1) //=> 2
> addOne(-5) //=> -4

```javascript
function addOne(num) {
  return num+=1;
}
```



### Challenge: 02-addTwoNumbers

Difficulty: Basic  

Prompt:

> Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

> addTwoNumbers(5, 10) //=> 15
> addTwoNumbers(10, -2) //=> 8
> addTwoNumbers(0, 0) //=> 0
> addTwoNumbers('Hello', 5) //=> NaN

```javascript
function addTwoNumbers(num1, num2) {
  // return num1 === NaN || num2 === NaN ? NaN : num1+num2;
  if (num1 === NaN || num2 === NaN){
    return NaN; 
  }else return num1+num2;
}
```



### Challenge: 03-sumNumbers

Difficulty: Basic  

Prompt:

> Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array. If the array is empty, return 0 (zero).

Examples:

> sumNumbers([10]) //=> 10
> sumNumbers([5, 10]) //=> 15
> sumNumbers([2, 10, -5]) //=> 7
> sumNumbers([]) //=> 0

```javascript
function sumNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
```

/*-----------------------------------------------------------------

### Challenge: 04-addList

Difficulty: Basic

Prompt:

> Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

Examples:

> add(1) //=> 1
> add(1,50,1.23) //=> 52.23
> add(7,-12) //=> -5

```javascript
function addList() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
```


### Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

> Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
> The first argument should be the dividend and the second argument should be the divisor.
> If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
> For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

> computeRemainder(10,2) //=> 0
> computeRemainder(4,0) //=> Infinity
> computeRemainder(10.5, 3) //=> 1.5

```javascript
function computeRemainder(num1, num2) {
  let output = 0;
  if (num2 === 0) {
      output = Infinity;
  } else {
      //Find remainder without using the modulus operator...
      let counter = 1;
      while (num2 * counter <= num1) {
          if ((num1 - (num2 * counter)) < num2) {
              break;
          } else counter++;
      }
      output = num1 - (num2 * counter);
  }
  return output;
}
```
