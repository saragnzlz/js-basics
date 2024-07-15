// Make a function that takes the numeral parameter 'limit',
// displays all number between 0 and that number
// with the "EVEN" or "ODD" label next to it.

showNumbers(20);

function showNumbers(limit){
    for ( let i = 0; i <= limit; i++ ){
        //if( i%2 === 0 ){
        //    console.log(i+" is EVEN")
        //} else {
        //    console.log(i+" is ODD")
        //}
        
        const message = ( i%2 === 0) ? i+` is EVEN` : i+` is ODD`;
        console.log(message)
    }
}