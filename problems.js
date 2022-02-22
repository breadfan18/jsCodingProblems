  /*
  ### Challenge: 26-toCamelCase
  
  **Difficulty:**  Intermediate
  
  Prompt:
  
  > Write a function called toCamelCase that accepts a single string as argument.
  > The toCamelCase function should return the string as camel-cased, removing each _ or - 
  > characters and capitalizing the character following the _ or -.
  > If the string argument does not contain a "_" or a "-", return the same string.
  `
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
  // const words = str.split(/[-_]/g);
  // const camelCased = words.slice(1, words.length).map(word => word.charAt(0).toUpperCase() + word.slice(1,word.length)).join('')
  // return words[0] + camelCased

  return str.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase())

}


console.log(toCamelCase('banana_Turkey_potato'))


function findFirstUniqueChar(str){
  // Count how many times each character repeats in the string and store that in an object
  let charCount = str.split('').reduce((obj, char) => {
    // check whether or not that key (char) already exists in the obj, 
    // --- if yes, we want to incremeent the value
    // --- if no, we want to set its value to 1
    obj[char]  = obj[char] + 1 || 1
    return obj
  }, {})

  // loop through the object and find the first char that has a value of 1
  for (let key of Object.keys(charCount)){
    if(charCount[key] === 1) return str.indexOf(key)
  }
}

