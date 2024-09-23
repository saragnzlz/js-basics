// The purpose of an object is to group related variables
// Functions inside of objects are 'Methods'

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() { console.log('draw') }
};

circle.draw()
console.log(circle.location.x)

// Factory Function: 
function createCircle(radius, x, y){
    return {
        radius: radius,
        location: {
            x: x,
            y: y
        },
        draw() { console.log('draw') }
    };
}

const circle2 = createCircle(1,1,1)
const circle3 = createCircle(1,3,6)
console.log(circle2)
console.log(circle3)

// Constructor function

let f = {};
//// is the same as
let xx = new Object();

new String();
//// Strings are Objects in JavaScript, which can be declared like so: '', ``, ""
new Boolean(); // true,1,"unempty string"; false,0,""

function Circle (radius){
    this.radius = radius;
    this.draw = function(){ console.log('draw')};
}

const circle4 = new Circle(1);

// Dynamic
circle4.color = 'yellow'
circle4.draw = function(){ console.log('draw a yellow circle')}
console.log(circle4)

delete circle4.draw

// Objects are functions in JavaScript

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){ console.log('draw')};
    `);

const circle6 = new Circle1



// Enumerating properties in an object
console.log('***')
console.log(`All keys in 'circle':`)
for (let key in circle) {
    console.log(key, circle[key])
}


// 'Circle is not iterable' -> Only for 'Array' and 'Map' objects:
//for(let key of circle){
//    console.log(keys)
//}

console.log(`All keys in 'circle':`)
// Object.keys will return an Array
for ( let key of Object.keys(circle) ){
    console.log(key, circle[key])
}
console.log(`All keys in 'circle':`)
for( let key of Object.entries(circle)){
    console.log(key)
}

// Checking for keys in an Object:
if('radius' in circle) {
    console.log(`radius is a property of the 'circle' object :`+circle.radius)
}else{
    console.log(`radius is not a property of the 'circle' object`)
}

// Checking for keys in an Object:
if('color' in circle) {
    console.log(`color is a property of the 'circle' object :`+circle.color)
}else{
    console.log(`color is not a property of the 'circle' object`)
}
console.log('***')