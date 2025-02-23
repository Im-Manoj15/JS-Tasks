Question 10: Calculate Average of an Array
Problem: Write a function that calculates the average of all numbers in an array.
Input: [1, 2, 3, 4, 5]
Output: 3 

Answer:
function calAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const arr = [1, 2, 3, 4, 5];
const average = calAvg(arr);
console.log(average);
