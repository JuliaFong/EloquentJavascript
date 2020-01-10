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