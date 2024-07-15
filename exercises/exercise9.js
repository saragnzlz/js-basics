// Get the sum of multiples of 3 and 5: 33
// 3, 6, 9
// 5, 10

function sum(limit){
    let sum = 0

    for(let i=0; i<=limit; i+=3){
        sum += i
    }
    for(let i=0; i<=limit; i+=5){
        sum += i
    }
    
    return sum;
}

console.log(sum(10))