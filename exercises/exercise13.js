// Control Flow - Exercise 1

// Create an Address object with three properties: Street, City, ZIP Code
// Create a function called showAddress() that takes an address object and displays all the properties
// and its value.

const Address = {
    street: 'Abc',
    city: 'Abc',
    zipCode: 10000,
    showAddress() {
        for (let key in Address){
            console.log(key, Address[key])
        }
    }
}

console.log(Address.showAddress())