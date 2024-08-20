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
//// Strings are Objects in JavaScript

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