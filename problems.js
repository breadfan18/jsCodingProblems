// Write a function returns the index of the first unique character in a string

  
  // Your solution for 20-isPrime here:

function firstUnique(str) {
  // first, split the chars into an array
  // reduce the array into an object with the char as the key and it's count as a value
  // Then we loop throug the object to finf the first char that has value > 1
  // then we return the index of that char in the input string 

  let reducedObj = str.split('').reduce((obj, char) => {
    obj[char] ? obj[char]++ : obj[char] = 1
    return obj;
  }, {})

  
  for(let key in reducedObj){
    if(reducedObj[key] === 1) return str.indexOf(key)
  }
  
}


console.log(firstUnique('soosa'))

