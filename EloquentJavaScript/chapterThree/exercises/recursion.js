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