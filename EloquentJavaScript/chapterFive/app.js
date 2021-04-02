// HIGHER-ORDER FUNCTIONS

// Large proram is costly, and not just because of the time
// it takes for the build. Size involves complexity,
// complexity can confuse programmers. Confused programmers in turn,
// introduce mistakes(bugs) into programs. A larger program then provides
// a lot of space for these bugs to hide, making them hard to find

let total = 0, count = 1;
while (count <= 10) {
    total += count
    count += 1
}
console.log(total)

// Summing a range of numbers isnt about loops and cou ters. It's about ranges and sums.
// The definitions of this vocabulary (funtions of sum and range) will still
// involve loops, counters, and other incidental details
//  they are expressing simpler concepts than the program as a whole, ther are easier to get right.

// ABSTRACTION

// In context of programming, these kinds of vocabularies are usually called abstractions
// Abstractions hide details and give us ability to talk about problems
// at a highernor abstract level

// ABSTRACTING REPETITION

// Plain functions are a good way to build abstractions.
for (let i = 0; i < 10; i++){
    console.log(i)
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i)
    }
}
repeat(3, console.log)

let labels= []
repeat(5, i => {
    labels.push(`Unit ${i + 1}`)
})
console.log(labels)

// the body is now written as a function value, which is wrapped in the parenthese of the call to repeat
// this is why it has to be closing brace and closing parenthesis

// HIGHER ORDER FUNCTIONS

// Functions that operate on other functions, either by taking them as
// arguments or by returning them, are called higher order functions

// Higer-order functions allow us to abstract over actions, not just values

function greaterThan(n) {
    return m => m > n
}
let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))
// =>true

// we can have functions that change other functions

function noisy(f) {
    return (...args) => {
        console,log("callibg with", args)
        let result = f(...args)
        console.log("called with", args, ", returned", result)
        return result
    }
}
noisy(Math.min)(3, 2, 1)

// We can write functions that provide new types of control flow

function useless(test, then) {
    if (!test) then()
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even")
    })
})

// There's a buil in array method, forEach, that provides something like a for/of loop as a higher-order function

["A", "B"].forEach(1, console.log(1))

// {
//     name: "Coptic",
//     ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//     direction: "ltr",
//     year: -220,
//     living: false,
//     link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
// }


// Ranges propert contains a array of Unicode character ranges
// each of which is a two-element array containing a kower bound
// and an upper bound

// FILTERING ARRAYS

function filter(array, test) {
    let pased = []
    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }
    return passed
}
console.log(filter(SCRIPTS, script, script.living))
// ^^ this function is pure. it doesn't modify the array it is given

// TRANSFORMING WITH MAP

// Say we hae an array of objects representing scripts, produced by filtering the SCRIPTS array somehow

// The map method transforms an array by applying a function to all of its elements and building
// a new array from the returned values. The new array will have the same length
// as the input array, but its content will have been mapped to a new form by the function

function map(array, transfomr) {
    let mapped = []
    for (let element of array) {
        mapped.push(transfrom(element))
    }
    return mapped
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl")
console.log(map(rtlScripts, s => s.name))


