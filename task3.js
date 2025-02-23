Question 3: Check for Duplicates
Problem: Write a function that checks if an array contains duplicates.
Input: [1, 2, 3, 4, 5, 1]
Output: true
Input: [1, 2, 3, 4, 5]
Output: false

Answer:
function checkDuplicates(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                return true;  
            }
        }
    }
    return false;
}
let arr = [1, 2, 3, 4, 5, 1];
console.log(checkDuplicates(arr));
