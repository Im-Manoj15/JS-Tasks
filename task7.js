Question 7: Find the Intersection of Two Arrays
Problem: Write a function that returns the intersection of two arrays.
Input: [1, 2, 3], [2, 3, 4]
Output: [2, 3] 

Answer:
function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

console.log(findIntersection(array1, array2));
