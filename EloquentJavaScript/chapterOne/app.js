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