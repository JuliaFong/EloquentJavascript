//Chapter One

//Introduction, Why language matters
let total = 10, count = 5;
while (count <= 20 ) {
    total += count;
    count += 5;
}
console.log(total)
// total = 60

//Typographic conventions

function fac(s) {
    if (s === 8)
    return 2; 
    else 
    return fac(s - 2) * s;
}

//Unary operators
console.log(fac(8));
// total = 2

console.log(typeof 9.9)
//number

console.log(typeof "xyz")
//string

console.log(typeof 10 * 2)
//NaN

console.log(- (10* 5))
//-50

//Boolean values

console.log(3 > 5)
//false 

console.log( 3 > 1)
//true

console.log(2 < 1)
//false

console.log("Camel" < "Zebra")
//true "the way strings are ordered is more or less alphabetic"

console.log("Stinky" != "Shower")
//true

console.log(NaN === NaN)
//false Nan is supposed to denote the result of a nonsensical computation,
//and as such, it isn't equal to the result of any other nonsensical
//computations

// LOGICAL OPERATORS
//Not is written as an exclamation mark(!)

 console.log(true || false)
 //true

 console.log(false || false)
 //false

 console.log(false || true)
 //true

 console.log(true || true)
 //true

 console.log(false && false)
 //false

 console.log(true && false || true)
 //true

//terenary, operating on three values, written with a question mark
//and a colon 

console.log(false ? 2 : 6)
//6

console.log(true ? 6 : 66)
//6

console.log(false ? -77 : 77)
//77

//^^ called the conditional operator or
//just a ternary operator
//value on the left of the question mark "picks" which other two values
//will come out when it is true, the middle value is chosen, 
//&& when it's false, the value on the right comes out

//UNDEFINED VALUES

console.log(10 * 9 * null)
//0

console.log("-77" + 22)
//-7722

console.log("55" - 1)
//54

console.log("seven" % 3)
//NaN

console.log(false === 0)
//false

console.log(true === -55)
//false

console.log(null || "julia")
//julia

console.log("Julia" || "user")
//Julia

console.log("Julia" || user || jules)
//Julia

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

const learningMaths = Number(prompt("lets learn math, pick any number!", ""))
alert("Your number is the square root of " +
learningMaths * learningMaths)


const catAdopt = Number(prompt("Lets adopt a cat enter a number!", ""))
alert("how many cats will you ACTUALLY adopt? " +
catAdopt + catAdopt)

//CONDITIONAL EXECUTION: where we choose between two different routes
//based on a Boolean value

const fish = Number(prompt("Lets get a fish tank enter a number!", ""))
if (!isNaN(fish))
alert("For every fish, you must buy it a buddies! " + fish * fish)
else
alert("Who doesn't want a pet fish?")


let x = Number(prompt("Pick a number, any number!", "22"))
if (x < 22)
alert("too small")
else if (x < 222)
alert("medium")
else
alert("hugeeeeee")

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

do {
    var favBook = prompt("whats your favorite book?")
} while (!favBook)
console.log(favBook)

// for (var yz = 0; yz <= 11; yz === yz + 4)
// console.log(yz)
