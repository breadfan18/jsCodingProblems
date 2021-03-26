
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
  intString.length >= paddingLength ? output = intString : runIt();

  function runIt() {
    let timesToLoop = paddingLength - intString.length;
    for (let i = 0; i < timesToLoop; i++) {
      intStringArr.unshift(string);
    }
    output = intStringArr.join("");
  }

  return output;
}
```

### Challenge: 11-isPalindrome

**Difficulty:** Intermediate

Prompt:

> Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
> A palindrome is a word or phrase that are the same forward or backward.
> Casing and spaces are not included when considering whether or not a string is a palindrome.
> If the length of the string is 0 or 1, return true.

Examples:

> isPalindrome('SEI Rocks'); --> false

> isPalindrome('rotor'); --> true

> isPalindrome('A nut for a jar of tuna'); --> true

> isPalindrome(''); --> true

```javascript
//Using regex to normalize the original string (replace all special characters and white space with "nothing"). That way phrases will be evaluated as well for palindromism
function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return string === string.split("").reverse().join("");
}
```

### Challenge: 12-hammingDistance

**Difficulty:** Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.

> Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
> The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
> If the strings are not of the same length, the function should return NaN.

Examples:

> hammingDistance('abc', 'abc'); --> 0

> hammingDistance('a1c', 'a2c'); --> 1

> hammingDistance('!!!!', '****'); --> 4

> hammingDistance('abc', 'ab'); --> NaN


```javascript
function hammingDistance(string1, string2) {
  let counter = 0;
  if (string1.length !== string2.length) return NaN;
  for (let i = 0; i < string1.length; i++) {
      if(string1.charAt(i) !== string2.charAt(i)) counter++;
  }
  return counter;
}
```

### Challenge: 13-mumble

**Difficulty:** Intermediate

Prompt:

> Write a function called mumble that accepts a single string argument.
> The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
> Examples describe it best..

Examples:

> mumble('X'); --> 'X'

> mumble('abc'); --> 'a-bb-ccc'

> mumble('121'); --> '1-22-111'

> mumble('!A 2'); --> '!-AA>   -2222'

```javascript
function mumble(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
      const element = string[i];
      const elementPosition = i+1;
      for (let i = 0; i < elementPosition; i++) {
          output+= element ;
      }   
      if(i !== string.length-1) output += "-";       
  }

  return output;
}
```

### Challenge: 14-fromPairs

**Difficulty:** Intermediate

Prompt:

> Write a function named fromPairs that creates an object from an array containing nested arrays.
> Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
> If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.

Examples:

> fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) --> { a: 1, b: 2, c: 3 }

> fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) --> { name: "Sally", age: 24 }

```javascript
function fromPairs(myArr) {
  let newObj = {};
  for (const arr of myArr) {
      newObj[arr[0]] = arr[1];
  }
  return newObj;
}
```

### Challenge: 15-mergeObjects

**Difficulty:**  Intermediate

Prompt:

> Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
> If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

> mergeObjects({}, {a: 1});  --> {a: 1} (same object as first arg)

> mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  --> {a: 1, b: 2, c: 3, d: 4}

> mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  --> {a: 1, b: 22, c: 3, d: 44}

```javascript
/* 
Using the ... spread operator so that we can consume any number of objects as parameters
In a for loop, started iteration with i = 1. We want to skip index 0, because we want to merge
all the objects starting from the second object to the first one. 
Inside the loop, used the Object.assign(target, source) method to merge all properties from the second object onwards to the first object
This way automatically ensures that if there's already a key in the first object, then the value is updated to the later values from the later parameters.   
*/
function mergeObjects(...objects) {
  for (let i = 1; i < objects.length; i++) {
      Object.assign(objects[0], objects[i]);
  }
 return objects[0];
}
```

### Challenge: 16-findHighestPriced

**Difficulty:**  Intermediate

Prompt:

> Write a function named findHighestPriced that accepts a single array of objects.
> The objects contained in the array are guaranteed to have a price property holding a numeric value.
> The function should return the object in the array that has the largest value held in the price property.
> If there's a tie between two or more objects, return the first of those objects in the array.
> Return the original object, not a copy.
> Do not mutate the array being passed in.

Examples:

> findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
--> { sku: 'c3', price: 50 }

> findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
--> { sku: 'b2', price: 50 }

```javascript
function findHighestPriced(objects) {
  let highest = 0;
  objects.map((object) => {if (object.price > highest) highest = object.price;})
  return objects.find(object => object.price === highest);
}
```

### Challenge: 17-mapArray

**Difficulty:**  Intermediate

Prompt:

The goal is of this ### Challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

> Write a function named mapArray that accepts two arguments: a single array and a callback function.
> The mapArray function should return a new array of the same length as the array argument.
> The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.

Examples:

> mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
--> [2, 4, 6]  (a new array)

> mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} > ${f}`;
} );
--> ["1 > rose", "2 > tulip", "3 > daisy"]
```javascript
function mapArray(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i));
  }
  return newArr;
}
```

### Challenge: 18-reduceArray

**Difficulty:**  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

> Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
> The reduceArray function should return whatever is returned by the callback function on the last iteration.
> The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
> On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

> reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
--> 6

> reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
--> 9

> reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
--> {"Yes": 2, "No": 1, "Maybe": 1}
```javascript
function reduceArray(arr, func, accumulator) {
  for (let i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i], i); 
  }
  return accumulator;
}
```

### Challenge: 19-flatten

**Difficulty:**  Intermediate

Prompt:

> Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
> A flattened array is an array that contains no nested arrays.
> Arrays maybe nested at any level.
> If any of the arrays have duplicate values those duplicate values should be present in the returned array.
> The values in the new array should maintain their ordering as shown in the examples below.

Hint:

> This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

> flatten( [1, [2, 3]] );
--> [1, 2, 3]  (a new array)

> flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
--> [1, 2, 3, 4, 1, 'a', 'b', 'c']
```javascript
// Cheating with this one, by using the Array.prototype.flat() function

function flatten(arr) {
  return arr.flat(Infinity);
}
``` 