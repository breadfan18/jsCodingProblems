
/*
### Challenge: 26-toCamelCase

**Difficulty:**  Intermediate

Prompt:

> Write a function called toCamelCase that accepts a single string as argument.
> The toCamelCase function should return the string as camel-cased, removing each _ or > characters and capitalizing the character following the _ or -.
> If the string argument does not contain a "_" or a "-", return the same string.

Hints:

> This is a great ### Challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
*/
// Your solution for 26-toCamelCase here:

function toCamelCase(str) {
    let strSplit = str.split(/[\W_]/gi);
    let finalArr = [];

    for (let i = 0; i < strSplit.length; i++) {
        if (i === 0) finalArr.push(strSplit[i]);
        else {finalArr.push(strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1));};
    }

    return finalArr.join('');
}


console.log(toCamelCase('Mama-mia'));

// let test = "swaroop";

// console.log(test.charAt(0).toUpperCase() + test.slice(1));