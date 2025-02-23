Question 8: Calculate the Sum of Array Elements
Problem: Write a function that calculates the sum of all numbers in an array.
Input: [1, 2, 3, 4, 5]
Output: 15 

Answer:
let a = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);
