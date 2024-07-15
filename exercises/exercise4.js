// FizzBuzz algorithm
// If the number is divisible by 3, we get 'fizz'.
// If the number is divisible by 5, we get 'buzz'.
// If the number is divisible by 3 and 5 we get 'fizzbuzz'.
// If the number is not divisible by 3 nor 5 we get the input number.
// If the input is not a number, we return 'Not a number'.

function fizzBuzz(input){
    let result;

    if (typeof input !== 'number') return 'Not a number';

    switch (true) {
        case input%3 === 0 && input%5 === 0:
            result = "FizzBuzz"
            break;
            
        case input%3 === 0:
            result = "Fizz"
            break;

        case input%5 === 0:
            result = "Buzz"
            break;
    
        case input%3 !== 0 && input%5 !== 0:
            result = input
            break;
    
        // default:
        //     result = "Not a number"
        //     break;
    }

    return result;
}

console.log(fizzBuzz(9))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(2))
console.log(fizzBuzz('a'))
console.log(fizzBuzz('a'))