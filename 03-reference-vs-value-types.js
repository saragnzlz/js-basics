// Primitive types:

let x = 10;
let y = x;

x = 20;

console.log(x,y)

// x and y are two independent variables,
// so is the content assigned to each,
// even if they are the same 


// Reference types:

let z  = {value: 10};
let v = z;

console.log(z,v);
// 10, 10
v.value = 20;

console.log(z,v);
// 20, 20
// With reference types, an Object is created and the variables
// point to that address. So changes are updated on all.

// - Primitives are copied by their value
// - Objects are copied by reference
