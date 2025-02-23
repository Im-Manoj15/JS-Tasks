Question 9: Remove Falsy Values from an Array
Problem: Write a function that removes all falsy values from an array.
Input: [0, 1, false, 2, '', 3]
Output: [1, 2, 3]

Answer:
let arr = [0, 1, false, 2, '', 3];

function removeFalsy(arr) {

    return arr.filter((val) => val);
}

console.log(removeFalsy(arr));
