console.log("Hi!");

// Variables
let name = 'raposa';
console.log(name);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Constant variables (for when we don't want the value to change)
const solid = 0.3;

// Primite and value types
let surname = 'raposinha'; // String literal
let age = 27; // Number literal
let isApproved = true; // Boolean - used for yes/no logic
let zodiacSign; // Undefined
let favoriteColor = null; // Null -  for explicitly clearing the variable

// Dynamic typing
let input;

input = "Sara";
typeof input;

input = 7;
typeof input;


// Reference Types

    // Object
let person = {
    name: 'Mosh',
    age: 27
}
console.log(person);

person.name = 'Sara';
console.log(person)

person['name'] = "Juana la Loca";
console.log(person.name);
console.log(person)


    // Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

    //JavaScript is a Dynamic language, size, value and type can be modified anytime
selectedColors[2] = 'yellow';
selectedColors[3] = 8;
console.log(selectedColors);


// Functions

// Performing a task:
function greet (name, lastName){
    console.log('Hello ' + name + ' ' + lastName + '!!!')
}

greet("Juana");
let lastName = "la Loca"
greet("Juana",lastName);

// Calculating a value:

function square (Number) {
    return Number * Number;
}

let n = square(2);

console.log(n);
//4

console.log(4/2);


// OPERATORS //

//Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//// Increment and Decrement Operators
// 10
console.log(x);

// 11+1 (operation applied first)
console.log(++x);

// 11+1 (operation applied later)
console.log(x++);

// Assignment operators (=)
let m = 20;
let p = 3;
let r = 2;

m++;
// is the same as:
m = m + 1;

p += 5;
p = p + 5;

r *= 5;
r = r*5;

console.log(m,p,r);

//// Comparison operators


// Relational operators
let xx = 1;
console.log(xx > 0);
// true, 1 is bigger than 0
console.log(xx >= 1);
// true, 1 is equal or bigger than 1
console.log(xx < 1);
// false, 1 is no less than 1
console.log(xx <= 1);
// true, 1 is equal or smaller to 1


// Equality operators
console.log(xx === 1);
// true, x is the same value and type as 1
console.log(xx !== 1);
// false,  x is no different to 1

//// Lose equality operators
console.log( xx == y);

//// Strict equality operators
console.log( xx === y);

// true
console.log( '1' == 1 );
// false
console.log( '1' === 1 );

// Ternary operators

// If a costumer has over 10 points they're a GOLD costumer, otherwise they're silver.

let points = 110;
// Condition (produces boolean), if true, set to 'gold', otherwise, 'silver'
let customerType = points > 100 ? 'gold' : 'silver';

console.log(customerType);

// Logical Operators

// AND 
/// Returns 'true' if both operands/conditions are 'true'
// true
console.log(true && true);
// false
console.log(true && false);
console.log(false && true);
console.log(true && false);

// OR
// Returns 'true' if any operands/conditions are 'true'
// true
console.log(true && true);
console.log(false && true);
console.log(true && false);
// false
console.log(true && false);

// NOT
// Will turn the operand /condition into false if true, true if false


//Bitwise operators

