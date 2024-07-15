// Write a function that takes an array and checks if each value is 
// truthy or not, then returns the truthy ones

const values = ['fruity', ' ', '1314',1314, false, true, "NaN", 0 , "LOVE", undefined, null]
countTruthy(values)

//function countTruthy(array){
//    let truthy = []
//    for (let i = 0; i <= array.length; i++){
//        if (array[i] == true) {
//            truthy.push(array[i]) 
//            console.log(array[i]+" is truthy")
//        } else {
//            console.log(array[i]+" is falsey")
//        }
//    }
//}

function countTruthy(array){
    let truthy = []
    for (let value of array){
        if (value){
            truthy.push(value)
            console.log(value+" is truthy")
        }else{
            console.log(value+" is falsey")
        }
    }
    console.log("All the truthy values: "+truthy)
}