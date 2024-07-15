// Speed limit -> 70km/h
// For every 5km above the speed limit -> +1 point
// Use Math.floor
// If 12 points are reached, the driver will be suspended

let points;

function checkSpeed( speed ){

    speed = Math.floor(speed);
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit){
        return "Ok";
    } else {
    let points = Math.floor(( speed - speedLimit ) / kmPerPoint);
    
    if(points>= 12){
        console.log("License revoked.")
    }
    console.log('Speed: '+speed)
    console.log('Points: '+points)
    return 'Not ok'
    }     
}

console.log(checkSpeed(20))
console.log(checkSpeed(70))
console.log(checkSpeed(73))
console.log(checkSpeed(75))
console.log(checkSpeed(200))
console.log(checkSpeed(150))