Question 6: Group Array of Objects by Property
Problem: Write a function that groups an array of objects by a specific property.
Input: [ { id: 1, category: 'fruit' }, { id: 2, category: 'vegetable' }, { id: 3, category: 'fruit' } ]
Output: {
fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ],
vegetable: [ { id: 2, category: 'vegetable' } ]
} 

Answer:
function groupByProperty(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
const items = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
];
console.log(groupByProperty(items, 'category'));
