  /*
  ### Challenge: 15-mergeObjects
  
  **Difficulty:**  Intermediate
  
  Prompt:
  
  > Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through
  > n objects into the first object, then finally returns the first object.
  > If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
  
  Examples:
  
  > mergeObjects({}, {a: 1});  --> {a: 1} (same object as first arg)
  > mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  --> {a: 1, b: 2, c: 3, d: 4}
  > mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  --> {a: 1, b: 22, c: 3, d: 44}
  */
  // Your solution for 15-mergeObjects here:

  function mergeObjects(object1, ...objects) {
    for (let i = 0; i < objects.length; i++) {
        object1 = {...object1, ...objects[i]}
    }
    return object1
}




console.log(mergeObjects({}, {a: 1}))
// console.log('test');
