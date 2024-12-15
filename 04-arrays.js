// 1. WRITING ELEMENTS
// Even on const declarations, arrays can be written onto.
const numbers = [3,4]

// But not like: numbers = [3,4,5] 

// Because Arrays are Objects, we can use their function properties, 
// like: 

// 'push'
// (adding to the end)
numbers.push(5,6)

// 'unshift'
// (pushes existing elements to the right, adds new elements to beginning)
numbers.unshift(1,2)

// 'splice'
// (access a specific position and add or remove elements
//  - args: start, amount of numbers to delete, items to add )
numbers.splice(2,0,2.5,'b')

console.log(numbers)
// 1, 2, 2.5, 'b', 3, 4, 5, 6

// 2. FINDING ELEMENTS

// Primitives:
const apples = [1,2,3,4,1]

// '.indexOf()'
// (looks for a given input inside the array and, if existing, will 
// return the index number of said array. If not, it will return -1.)
console.log(apples.indexOf(1))
//0
console.log(apples.indexOf(11))
//-1

// '.lastIndexOf()'
// (looks for the last occurrence of a given input inside the array and,
// if existing, will return the index number of said array. 
// If not, it will return -1.)
console.log(apples.lastIndexOf(1))
//4
console.log(apples.lastIndexOf(11))
//-1

// '.includes()'
// (Checks for a given element existing in the array. Returns true or false.)
console.log(numbers.includes(3))
//true
console.log(numbers.includes('blah'))
//false

//'fromIndex' 
// A second argument available for all last 3 methods. 
// It starts the search from the given index number. 
console.log(apples.indexOf(1))
//0
console.log(apples.indexOf(1,1))
//4
console.log(apples.lastIndexOf(1))
//4
console.log(apples.lastIndexOf(1,1))
//0


// Reference types
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

// '.find()'
// Here because the reference is allocated in another memory slot, 
// '.includes()' can't be used.
// The '.find()' function returns the first element in the array that 
// satisfies the provided testing function.
// These functions are called predicates or callback, they're used to 
// check if the given element exists in the array because, as we said, 
// it cannot be compared directly.
courses.find(function(course){
    return course.name === 'a'
})
//true

courses.find(function(course){
    return course.name === 'd'
})
//false

// '.findIndex()'
courses.findIndex(function(course){
    return course.name === 'a'
})
//0

courses.findIndex(function(course){
    return course.name === 'd'
})
//-1

// Arrow functions
// Used to call functions, pre-existant or not:
const courseC = courses.find( (course) =>{
    return course.name === 'a';
})
const courseA = courses.find( course =>{
    return course.name === 'a';
})
const courseB = courses.find( course => course.name === 'a');


