// Calculate the grade of a students:
// Get the average grade -> a+b+c/3
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


const marks = [80,80,50];

function calculateGrade(marks){
    let average = Math.floor((marks[0]+marks[1]+marks[2])/marks.length)
    console.log('Your average is '+average+' so your grade is:')
    switch (true) {
        case average>=1 && average<=59:
            console.log("F")
            break;
        case average>=60 && average<=69:
            console.log("D")
            break;
        case average>=70 && average<=79:
            console.log("C")
            break;
        case average>=80 && average<=89:
            console.log("B")
            break;
        case average>=90 && average<=100:
            console.log("A")
            break;
        default:
            console.log("to be reviewed")
            break;
    }
}
function calculateGrade(marks){
    let sum = 0

    for(let mark of marks){
        sum += mark
    }

    let average = sum/marks.length;

    console.log('Your average is '+average+' so your grade is:')
    switch (true) {
        case average>=1 && average<=59:
            console.log("F")
            break;
        case average>=60 && average<=69:
            console.log("D")
            break;
        case average>=70 && average<=79:
            console.log("C")
            break;
        case average>=80 && average<=89:
            console.log("B")
            break;
        case average>=90 && average<=100:
            console.log("A")
            break;
        default:
            console.log("to be reviewed")
            break;
    }
}

console.log(calculateGrade(marks))