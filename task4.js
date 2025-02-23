Question 4: Merge Two Objects
Problem: Write a function that merges two objects into one.
Input: { a: 1, b: 2 }, { b: 2, c: 4 }
Output: { a: 1, b: 2, c: 4 }


Answer:
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 2, c: 4 })); 
