/*
### Challenge: 20-isPrime

**Difficulty:** Intermediate

Prompt:

> Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to 
> it is not prime.
> A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

Examples:

isPrime(2) --> true
isPrime(3) --> true
isPrime(4) --> false
isPrime(29) --> true
isPrime(200) --> false
*/
// Your solution for 20-isPrime here:

/* 
To check if a number is prime, num  % 2 === 0, then return false
*/

function isPrime(num) {
    if(!Number.isInteger(num)) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(12.333));