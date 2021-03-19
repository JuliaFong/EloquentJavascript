
// ** CHAPTER 2 PROGRAM STRUCTURE ** //

//fragment of code that produces a 
//value is called an expression

//to catch and hold values, JS 
//provides a thing called a variable (var -> const)

const math = 66 % 11;
console.log(math)
//0

const twenty = 20;
console.log(twenty * twenty);
//400

const moon = "darkness"
console.log(moon)
//darkness

let photosynthesis = "flower"
console.log(photosynthesis)
//flower

photosynthesis = "growth"
console.log(photosynthesis)
//growth

let studentLoan = 1400
studentLoan = studentLoan - 350
console.log(studentLoan)
//1050

let twentytwo = 22, five = 5
console.log(twentytwo * five)
//110

//The collection of variables and their values that exist at a
//given time is called the ENVIRONMENT

//executing a function is called INVOKING, CALLING, OR APPLYING

//values give to functions are called arguments

//showing a dialog box or writing text to the side is a SIDE EFFECT

console.log(Math.max(-55, -1000))
//-55

console.log(Math.max(77, 666))
//666

console.log(Math.max(983459823, 8763476413768))
8763476413768

// const learningMaths = Number(prompt("lets learn math, pick any number!", ""))
// alert("Your number is the square root of " +
// learningMaths * learningMaths)


// const catAdopt = Number(prompt("Lets adopt a cat enter a number!", ""))
// alert("how many cats will you ACTUALLY adopt? " +
// catAdopt + catAdopt)

//CONDITIONAL EXECUTION: where we choose between two different routes
//based on a Boolean value

// const fish = Number(prompt("Lets get a fish tank enter a number!", ""))
// if (!isNaN(fish))
// alert("For every fish, you must buy it a buddies! " + fish * fish)
// else
// alert("Who doesn't want a pet fish?")


// let x = Number(prompt("Pick a number, any number!", "22"))
// if (x < 22)
// alert("too small")
// else if (x < 222)
// alert("medium")
// else
// alert("hugeeeeee")

//WHILE AND DO LOOPS

// a statement starting with a while creates a loop
// which is followed by an expression in parenthese
//and then a statement

let xy = 99
while (xy >= 66){
    console.log(xy)
    xy = xy % 2
}
//99

let xyz = 123
let a = 0

while (xyz <= 55) {
    xyz = xyz * 4
    a = a + 2
}
console.log(xyz)
//123

//DO loop is a control structure similar to the while loop
// DO loop always executes its body at least once

// do {
//     var favBook = prompt("whats your favorite book?")
// } while (!favBook)
// console.log(favBook)

// for (var yz = 0; yz <= 11; yz === yz + 4)
// console.log(yz)


for (var messages = 24; messages > 2; messages ++){
    if (messages % 2 === 0)
    break;
}
console.log(messages)
//24

// var message = 24
// for (var message = 0; message <= 24; message === message + 2)
//     message = message % 2
// console.log(message)

// Especially when looping, a program often needs to "update" 
//a variable to hold a variable to hold a value
//based on that variable's previous values

//You may put any number of case labels inside the block 
//opened by switch

// a program is built out of statements
//which cane sometimes contain more statements

//EXERCISES
// LOOPING A TRIANGLE 

let x = ""

for(let i=0; i < 8; i++){
    x = "#" + x;
    console.log(x)
}


