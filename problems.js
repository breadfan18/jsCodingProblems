
/*
### Challenge: 23-balancedBrackets

**Difficulty:**  Intermediate

Prompt:

> Write a function called balancedBrackets that accepts a single string as argument.
> The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
> The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
> The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
*/
// Your solution for 23-balancedBrackets here:
function balancedBrackers(str) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    console.log(str.length /2);
    if(str.length % 2 !== 0) return false;
    // let isBalanced = false;
    for (let i = 0; i < str.length/2; i++) {
        console.log('IRERATION ' + i);
        console.log(i, str.charAt(i));
        console.log(i, str.charAt((str.length - i) - 1));



        if (str.charAt(i) === str.charAt((str.length - i) - 1)) {
            return true;
        }
        
    }

    return false;
}

console.log(balancedBrackers('[({}[])]'));

let test = '[()]';

console.log(test.charAt(test.length));