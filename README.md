
### Challenge: 01-addOne

**Difficulty:** Basic

Prompt:
> Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

> addOne(1) --> 2
> 
> addOne(-5) --> -4

```javascript
function addOne(num) {
  return num+=1;
}
```



### Challenge: 02-addTwoNumbers

**Difficulty:** Basic  

Prompt:

> Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

> addTwoNumbers(5, 10) --> 15
> 
> addTwoNumbers(10, -2) --> 8
> 
> addTwoNumbers(0, 0) --> 0
> 
> addTwoNumbers('Hello', 5) --> NaN

```javascript
function addTwoNumbers(num1, num2) {
  return (typeof num1 === 'number' && typeof num2 === 'number') ? num1+num2 : NaN;
}
```



### Challenge: 03-sumNumbers

**Difficulty:** Basic  

Prompt:

> Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array. If the array is empty, return 0 (zero).

Examples:

> sumNumbers([10]) --> 10 
> 
> sumNumbers([5, 10]) --> 15
> 
> sumNumbers([2, 10, -5]) --> 7
> 
> sumNumbers([]) --> 0

```javascript
function sumNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
```


### Challenge: 04-addList

**Difficulty:** Basic

Prompt:

> Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

Examples:

> add(1) --> 1
> 
> add(1,50,1.23) --> 52.23
> 
> add(7,-12) --> -5

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

**Difficulty:** Basic

Prompt:

> Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
> The first argument should be the dividend and the second argument should be the divisor.
> If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
> For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

> computeRemainder(10,2) --> 0
> 
> computeRemainder(4,0) --> Infinity
> 
> computeRemainder(10.5, 3) --> 1.5

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

//OR Simpler Solution

function computeRemainder(num1, num2) {
  if (num2 === 0) return Infinity;
  return  num1 - (Math.floor(num1/num2) * num2);
}

```
### Challenge: 06-range

**Difficulty:** basic

Prompt:

> Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
> The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".

Examples:

> range(1,4) --> [1,2,3]
> 
> range(-2, 3) --> [-2,-1,0,1,2]
> 
> range(1,1) --> []
> 
> range(5,2) --> "First argument must be less than second"
> 

```javascript
function range(int1, int2) {
  let output;
  int1 <= int2 ? runIt() : output = "First argument must be less than second";

  function runIt() {
      let numArr = [];
      for (let i = int1; i < int2; i++) {
          numArr.push(i);
      }
      output = numArr;
  }
  return output;
}
```

### Challenge: 07-reverseUpcaseString

**Difficulty:** Basic

Prompt:

> Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.

Examples:

> reverseUpcaseString("SEI Rocks!"); --> "!SKCOR IES" 

```javascript
function reverseUpcaseString(string) {
  let reversed = "";
  for (let i = string.length; i >= 0; i--) {
      let currentChar = string.charAt(i);
      reversed += currentChar;
  }
  return reversed.toUpperCase();
}
```

### Challenge: 08-removeEnds

**Difficulty:** Basic

Prompt:

> Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
> If the length of the string argument is less than 3, return an empty string.

Examples:

> removeEnds('SEI Rocks!'); --> "DI Rocks"
> 
> removeEnds('a'); --> "" (empty string)

```javascript
function removeEnds(string) {
  if (string.length < 3) return "";
  else return string.substring(1, string.length-1);
}
```

### Challenge: 09-charCount

**Difficulty:** Basic

Prompt:

> Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
> The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
> Upper and lower case characters should be counted separately.
> Space characters should be count too.

Examples:

> charCount('hello') --> { h: 1, e: 1, l: 2, o: 1 }

> charCount('Today is fantastic!') --> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }

```javascript
function charCount(string) {
  let charArray = [...string];
  let myObj = {};
  for (let i = 0; i < charArray.length; i++) {
      const currentChar = charArray[i];
      if (myObj.hasOwnProperty(currentChar)) {
          myObj[currentChar]++;
      } else myObj[currentChar]= 1; 
  }
  return myObj;
}
```

### Challenge: 10-formatWithPadding

**Difficulty:** Basic

Prompt:

> Write a function called formatWithPadding that accepts three arguments:
  > A numeric argument (an integer) representing the number to format.
  > A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  > Another numeric argument (an integer) representing the length to "pad" the returned string to.
> The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
> If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed > just return the integer as a string.

Examples:

> formatWithPadding(123, '0', 5); --> "00123"
>
> formatWithPadding(42, '*', 10); --> "********42"
>
> formatWithPadding(1234, '*', 3); --> "1234"/

```javascript
function formatWithPadding(int, string, paddingLength) {
    let output = "";
    let intString = int.toString();
    let intStringArr = [...intString];
    console.log(intStringArr);
    intString.length >= paddingLength ? output = intString : runIt();

    function runIt() {

        console.log(output);
        let timesToLoop = paddingLength - intString.length;
        for (let i = 0; i < timesToLoop; i++) {
            intStringArr.unshift(string);      
        }
        for (let i = 0; i < intStringArr.length; i++) {
            const element = intStringArr[i];
            output += element;
            
        }
    }
    return output;
}
```

