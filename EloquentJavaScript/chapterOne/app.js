//Chapter One

// Values 
// To create a value, you must envoke it's name

// Numbers
// Values of the number type are numerica values

// Strings
// strings are used to represent text
// They are written by enclosing their content in quotes
// whenever a backslash(\) is found inside quoted text, it indicates that the character after it has a special meaning
// That's called escaping the character. 
// Strings can't be divided, multiplied, or subtracted but the + operator
// can be used on them. It doesn't add, but it concatenates-it glues two strings together

"con" + "cat" + "e" + "nate"

// string values can hav e a number of associated functions (methods) that can be used to perform other operations on them

// backtick-quoted strings, usually called template literals, can do a few more tricks
//  Apart from being able to span lines, they can also embed other values
`half of 100 is ${100/2}`

// Unary operators
// Not all operators are symbols, some are written as words
// one example if the typeof operator, which produces a string value
// naming the type of the value you give it

console.log(typeof 4.5)
console.log(typeof "x")

// Boolean values 
// Used to distinguish between two possibilities like
// "yes" "no" "on" "off"

// Logical operators
// Javascript supports three logical p[erators and, or, and not
// These can be used to "reason about Booleans"

console.log(true && false)
// false
console.log(true && true)
// true

// Not is written as an exclamation mark(!)
// it's a unary operator that flips the value given to it
// !true prodices false and !false gives true

1 + 1 == 2 && 10 * 10 > 50
console.log(true ? 1 : 2)
// 1
console.log(false ? 1 : 2)
// 2


// Empty Values

// There are two special values, written null and undefined, that are used to denote the absence of a meaningful value

// The difference in meaning between undefined and null is an accident of JS design, and it doesn't matter most of the time

// AUTOMATIC TYPE CONVERSION

// When an operator is applied to the "wrong" type of value,
// Javascript will quietly comvert that value to the type it needs, using a set of rules
// that often aren't what you want or expect. This is called type coercion

// NaN = Not a Number

// When you want to test whether a value has a real value instead of null or undefined,
// you can compare it to null with the == (or !=) operator

// Use three character comparison operators defensively to prevent unexpected type conversions from tripping you up.

// The logical operators && and || habdle values of different types in a peculiar way

// The || operat for example will return the value to its left when that
// can be converted to true and will return the value to its right otherwise



//Introduction, Why language matters
let total = 10, count = 5;
while (count <= 20 ) {
    total += count;
    count += 5;
}
console.log(total)
// total = 60

//Typographic conventions

function fact(s) {
    if (s === 8)
    return 2; 
    else 
    return fact(s - 2) * s;
}

//Unary operators
console.log(fact(8));
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