/*
### Challenge: 22-intersection

**Difficulty:** Intermediate

Prompt:

> Write a function named intersection that accepts two arguments which are both arrays.  
> The array arguments may contain any mixture of strings, numbers and/or booleans > but no reference types, i.e., objects.
> The function should return a new array containing all elements in common, including repeating element values.
> The ordering of the elements in the returned is not important.
> If there are no elements in the arrays in common,  the intersection function should return an empty array.
> The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) --> []
intersection(['a', 1], [true, 'a', 15]) --> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) --> [1, true, 1]
*/

function intersection(arr1, arr2) {
    let newArr = [];

    let longerArr = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < arr1.length; i++) {
        let arr1Elem = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            const arr2Elem = arr2[j];
            
            if(arr1Elem === arr2Elem){
                newArr.push(arr1Elem);
            }
        }
    }
    return newArr;
}

console.log(intersection(
    
[1, 'a', true, 1, 1], 
[true, 1, 'b', 1]

));