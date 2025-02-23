Question 1: Reverse an Array
Problem: Write a function that takes an array and returns a new array with the elements in
reverse order.
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

Answer:
function reverseArray(arr) {
    return arr.slice().reverse(); 
}
const Array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(Array);
console.log(reversedArray); 
