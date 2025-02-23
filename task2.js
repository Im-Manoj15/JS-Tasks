Question 2: Flatten an Array
Problem: Write a function that takes a nested array and flattens it to a single-level array.
Input: [1, [2, 3], [4, [5]]]
Output: [1, 2, 3, 4, 5]

Answer:
let array = [1, [2, 3], [4, [5]]]
let flatarray = array.flat(Infinity);
console.log(flatarray);
