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
