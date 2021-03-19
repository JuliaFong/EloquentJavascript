






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