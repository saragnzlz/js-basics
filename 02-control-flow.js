// If ... else

let hour = 19;

if (hour >=6 && hour < 12){
    console.log('Good morning!')
}
else if ( hour >=12 && hour <=18){
    console.log('Good afternoon!')
}
else{
    console.log('Good evening!')
}


// Switch ... Case

let role = "guest";

switch(role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator');
        break; 
    default:
        console.log('Unknown user');
}

// For
for (let initialExpresion = 1; initialExpresion <= 5;  initialExpresion++){
    console.log(initialExpresion+" loop(s)")
}

// While
let initialExpresion = 1;
while(initialExpresion < 5){
    console.log(initialExpresion+" loop(s)")
    initialExpresion++;
}

// Do ... while
let i = 0
do{ 
    i++
    console.log(i);
} while( i<5 )

// For ... in
const person = {
    name: "Sara",
    age: 27
}

for( let key in person ){
    console.log(key);
    // Access properties' values 
    console.log(person.name)
    console.log(person["age"])
    console.log(key, person[key])
}

const colors = ['blue', "red", 0];
for (let index in colors)
    console.log(index, colors[index])

// For ... of

for (let color of colors)
    console.log(color);