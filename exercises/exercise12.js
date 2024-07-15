// -- Get Prime Numbers -- 
// In mathematics numbers can be prime or composite.
// - Prime numbers are numbers whose factors are only 1 on themselves,
//   so they can only be evenly divided by those, the remainder will be 0.


showPrimeNumbers(20)

function showPrimeNumbers(limit) {
    let primeN = []
    for( let number = 2; number <=limit; number++ ){
        let isPrime = true;
        for( let factor = 2; factor<number; factor++){
            if ( number%factor === 0 ) {
                isPrime = false
                break;
            }
        }
        if ( isPrime ) console.log(number)
    }
}
