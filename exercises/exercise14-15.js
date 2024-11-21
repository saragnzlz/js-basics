// Initialize an Address object using:
// - A factory function
// - A Constructor function

// Factory
function createAddress (street, city, zipcode) {
    return{
        street: street,
        city: city,
        zipCode: zipcode,
        showAddress() {
            for (let key in Address){
                console.log(key, Address[key])
            }
        }
    }
}
// Constructor
function Address (street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    
    this.showAddress = function showAddress() {
        for (let key in Address){
            console.log(key, Address[key])
        }
    }
}

let AddressA = createAddress('A', 'AAA', 11111)
let AddressB = new Address('B', 'BBB', 22222)
let AddressC = new Address('B', 'BBB', 22222)

console.log(AddressA,AddressB)

// 15.
// Create a function that determines wether two objects are:
// - equal (share properties)
// - the same exact object

function areEqual(object1, object2){
    return object1.street === object2.street &&
        object1.city === object2.city &&
        object1.zipcode === object2.zipcode;
}

function areSame (object1,object2){
    return object1 === object2;
}

console.log(areEqual(AddressA,AddressB))
console.log(areEqual(AddressB,AddressC))
console.log(areEqual(AddressC,AddressC))
console.log(areSame(AddressA,AddressB))
console.log(areSame(AddressB,AddressC))
console.log(areSame(AddressC,AddressC))