// How to Sort an Array in JavaScript
// Sorting means arranging the items in a list in order. In JavaScript, you can sort an array (a list of items) using the sort() method.

// Basic Sorting
// If you don’t give sort() any instructions, it sorts the items like words in a dictionary:

// Basic Sorting
// If you don’t give sort() any instructions,
//  it sorts the items like words in a dictionary:
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// Sorting Numbers
// Sorting numbers as if 
// they were words doesn't work well:

// let numbers = [30, 4, 20];
numbers.sort();
console.log(numbers); // [20, 30, 4] (This is wrong!)

// To sort numbers correctly, 
// you need to tell 
// sort() how to compare them:
let numbers = [30, 4, 20];
numbers.sort((a, b) => a - b);
console.log(numbers); // [4, 20, 30]


// Sorting with a Compare Function
// A compare function is a small piece 
// of code that tells sort() 
// how to order the items. For example:

// If you want to sort from 
// smallest to largest, use (a, b) => a - b.
// If you want to sort from
//  largest to smallest, use (a, b) => b - a.


// Here's how you can sort 
// a list of objects (things with names and ages):
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

people.sort((a, b) => a.age - b.age);
console.log(people); 
// Output: [{ name: 'Charlie', age: 20 },
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 30 }]

 // const accessKey = '5W1G9QNvrGvBht2u7tx6JfceLcWqyKLTVdL-JOPagFM';
        // const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

        // fetch(apiUrl)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
