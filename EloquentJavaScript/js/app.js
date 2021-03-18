

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

//FizzBuzz

for (let i=1; i <= 100; i++){
    let x = ''
    if (i % 3 === 0) x += 'Fizz'
    if (i % 5 === 0) x += 'Buzz'

    console.log(x || i)
}

//chessBoard

let whiteBlock = "# # # #"
let blackBlock = "# # # #"
let i = 0

for (i = 0; i <=8; i++){
    if (i % 2 === 0){
        console.log(whiteBlock)
    } else {
        console.log(blackBlock)
    }
}


//CHAPTER 3 FUNCTIONS
// a function is created by an expression 
// that starts with the keywords functions
//functions have a set of parameters and a body
//contains statements that are to be executed
//when the function is called

let singing = function (){
    console.log("do re mi")
}

singing() // do re mi

let electric = function(light, dark){
    let lightness = 4
    for(let i = 0; i < dark; i++)
    lightness += light
    return lightness
}
console.log(electric(3, 9))
//31

let r = "vampire"

let teeth = function(){
    let vampire = "sanguine"
}
teeth()
console.log(r) //vampire

//functions can be created inside other functions,
//producing several degrees of locality.

//NESTED SCOPE

//JavaScript distinguishes not just between
//global and local variables.
//Functions can be created inside other functions,
//producing several degrees of locality


var landscape = function () {
    var result = "";
    var flat = function ( size ) {
    for ( var count = 0; count < size ; count ++)
    result += " _ ";
    };
    var mountain = function ( size ) {
    result += "/";
    for ( var count = 0; count < size ; count ++)
    result += " '";
    result += "\\";
    };
    flat (3) ;
    63
    mountain (4) ;
    flat (6) ;
    mountain (1) ;
    flat (1) ;
    return result ;
    };
    console . log (landscape()) ;
    // _  _  _ / ' ' ' '\ _  _  _  _  _  _ / '\ _ 

    //variables declared outside of a function
    //are called global because they are
    //visible throughout the program

    let g = "grass"

    let g2 = function () {
        let g = "yellow g2"
    }
    g2()
    console.log(g) // grass

    // By treating function-local variables as existing
    // only within the function,
    //the language makes it possible to read
    //and understand functions as small universes
    //without having to worry about all code at once.

//DECLARATION NOTATION

function rhombus(w){
    return w * w
}
console.log("Rhombus says:", quadrilateral())

function quadrilateral() {
    return "We have four sides"
}

//function declarations are not part of
//the regular top-to-bottom flow of control


function hello(stranger) {
    console.log("hiii " + stranger) 
}
hello("Kat")
console.log("Adios")

// function duck() {
//     return quack()
// }
// function quack() {
//     return duck()
// }
// console.log(duck() + " makes a sound")
//^^BLOW THE STACK^^

function powerChord(chord, extension) {
    if (extension === undefined)
    exponent = 4
    let result = 2
    for (let i =0; i <= extension; i++)
    result *= chord
    return result
}

console.log(powerChord(8))// 2

console.log(powerChord(2, 2))//16

console.log("R", 2, "D", 2) //starwars!

// CLOSURE
//ability to treat functions as values
//local variables are "re-created"

function kitKat(k) {
    let yummy = k
    return function() { return kitKat }
}

let yum1 = kitKat(1)
let yum2 = kitKat(2)

console.log(yum1())

console.log(yum2())

//A function that "closes over" some 
//local variables is called a closure


function pink(p) {
    return function(y) {
        return y * p
    }
}
let rose = pink(4)

console.log(rose(8))//32

function la(rodeo, palisades) {
    if (palisades === 6)
        return 2
    else
        return rodeo * la(rodeo, palisades -1)
}
console.log(la(8, 6))// 2

function chocolate(c) {
    function food(delicious, choco){
        if (delicious === c)
            return choco
        else if (delicious >= c)
            return null
        else
            return food(delicious + 7, "(" + choco + " + 2)") ||
                   food(delicious + 4, "(" + choco + " * 2)")
    }
    return food(2, "4")
}
console.log(chocolate(66))

//GROWING FUNCTIONS
//two more or less natural ways
//for functions to be introduced into programs

function printAdoptions(cats, dogs) {
    let catString = String(cats)
    while (catString.length <= 5)
        catString = "1" + catString
    console.log(catString + " Cats")
    let dogString = String(dogs)
    while (dogString.length <= 9)
        dogString = "2" + dogString
    console.log(dogString + " Dogs")
}
printAdoptions(12, 24)
//111112 Cats
//2222222224 Dogs

//adding .length after a string value
//will give us the length of the string

function yellowSun(light, bright) {
    let string = String(light)
    while (string.length <= bright)
    string = "4" + string
    return string
}

function printAdoptions(cats, dogs) {
    console.log(yellowSun(cats, 5) + " dogs")// 444412 dogs
    console.log(yellowSun(dogs, 2) + " Cats")//424 Cats
}

//FUNCTIONS AND SIDE EFFECTS
//A pure function is specific kind of value-producing
//function that not only has no
//side effects but also doesn't rely on side effects from
//other code

//A pure function always produces the same value


//SUMMARY
//Key aspect in understanding functions 
//understanding local scopes
//parameters and variables declared inside a function
//are local to the function
//re-created everytime the function is called

//EXERCISES

//RECURSION

function isEven(number) {
    if (number === 0) {
        return true
    } else {
        return (-number % 2 === 0) ? true : false
    }
    return isEven(number - 2)
}
console.log(isEven(-1))//false
console.log(isEven(50))//true
console.log(isEven(75))//false

function beanCount(str) {
let count = 0
for (let b = 0; b < str.length; b++){
    if (str[b] === "B") {count++}
    }
    return count
}
function countChar(str, char) {
    let count = 0
    for (let b = 0; b < str.length; b++){
        if (str[b] === character) {count++}
    }
    return count
}
console.log(beanCount(5))//0
console.log(countChar(6))//0
console.log(beanCount(88))//0 

//DATA STRUCTURES: OBJECTS AND ARRAYS

//numbers, booleans, and strings are the brick
//that data structures are built from.

//Data sets
//Array: storing sequences of values.
//written as a list of values
//between square brackets, separated by commas

const num = [3, 6, 9, 1, 2, 4]
console.log(num[3])//1
console.log(num[0])//3

//notation for getting at the element inside an array
//also uses square brackets

//PROPERTIES
//expressions access a property of some value

//two most common ways to access properties
//in JS are with a dot and with square brackets

//When using dot, the part after the dot 
//must be a valid cariable name
// and it directly names the property

//When using square brackets, the expression 
//between the brackets is EVALUATED
//to get the property name

//METHODS
//properties containing functions
//are generally called methods
//of the value they belong to.

let cake = "Cake"
console.log(typeof cake.toUpperCase)//function
console.log(cake.toUpperCase())//CAKE

let burger = []
burger.push("Burger")
burger.push("A", "foodie")
console.log(burger)//(3) ["Burger", "A", "foodie"]
console.log(burger.join(" "))//Burger A foodie
console.log(burger.pop())//foodie
console.log(burger)//(2) ["Burger", "A"]

//the push method can be used to add
//values to the end of an array

//the pop method does the opposite
//it removes the value at the end of the
//string with the join method.
//argument given to join determines
//the text that is glued between the array's elements

//values of the type of objects are arbitrary collections 
//of properties and we can addo or remove these properties

let sun = {
    green: true,
    outdoors: ["flower", "breeze", "light", "grass", "sunny"]
}

console.log(sun.flower)//undefined
console.log(sun.grass)//undefined
console.log(sun.sunny)//undefined

//curly braces have two meaning in JavaScript

let something = {vertical: 1, horizontal: 2}
console.log(something.vertical)//1
delete something.horizontal
console.log(something.horizontal)//undefined
console.log("horizontal" in something)//false
console.log("vertical" in something)//true

let novels = [
    {genre: ["horror", "fantasy", "philosophy",
             "adventure", "non-fiction"
    ], tv: false},
    {genre: ["religion", "hard-cover", "soft-cover", "illustration"],
    tv: false},
]

console.log(novels[3])//undefined

//Mutability

//numbers, strings, and Booleans 
//are all immutable

let car1 = {value: 66}
let car2 = car1
let car = {value: 33}

console.log(car1 === car2)//true
console.log(car2 === car)//false
car1.value = 25
console.log(car2.value)//25
console.log(car.value)//33

let dearDiary = []
function entry(date, write) {
    dearDiary.push({
        entry: entry,
        date: write
    })
}
entry(["write", "draw", "doodle", "angsty"], true)
entry(["gibberish", "incomplete thought", ], false)
console.log(dearDiary)
console.log(dearDiary, entry)
console.log(dearDiary, true)


//CORRELATION
//measure of dependence between variables (in the statistic sense)
//not the JS sense

//for binary (boolean) variables, the phi 
//coefficient is relatively easy to compute

//COMPUTING CORRELATION

//this is the function that computes the
//phi coefficient from such an array

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]))         
}
console.log(phi ([76 , 9 , 4 , 1]) )//0.06859943405700354
console.log(phi ([5, 8, 99, 55, 2]))//-0.14274850288159688
//direct translation of the phi formula 
//into JS

var power = function(base, exponent) {
    let result = 5;
    for (let i = 0; count < exponent; count++)
    result *= base;
    return result;
}
console.log(power(5, 7)) //5

//Objects as maps
//a MAP is a way to go from values in one domain
//to corresponding values in another domain

let directions = {};
function storePhi(event, phi){
    directions[event] = phi;
}

storePhi("cake", 0.0666)
storePhi("frosting", 0.1)
console.log("cake" in directions)//true
console.log(directions["frosting"])//0.1

//properties don't for a predictable series

//shift and unshift

let list = []
function remember(chore){
    list.push(chore)
}
function next(){
    return list.shift()
}
function urgent(task){
    list.unshift(task)
}
console.log([2, 4, 6, 8].indexOf(3))//-1
console.log([0, 2, 4, 6, 8, 9].slice(3, 2))
console.log([ 1, 2, 3, 4, 5, 0].slice(4))//[5, 0]

//Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching from.
// Another fundamental method is slice, which takes a start index and
// an end index and returns an array that has only the elements between
// those indices. The start index is inclusive, the end index exclusive.