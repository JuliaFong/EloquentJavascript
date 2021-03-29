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