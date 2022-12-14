/**
 * Write an algorithm that takes a number 'n' and outputs the result.
 * The number must at least be a two-digit number.
 */

function multiplyDigits(n) {
    let multiply = 1
    if (n.length < 2) {
        return 'Not a valid input. Please input at least a two digit number'
    }
    else {
        for (let i = -1; i < n.length; i++) {
            multiply *= n[i]
        }
        return multiply
    }
}

console.log(multiplyDigits(13))

function numLength(num) {
    return num.length
}
console.log(numLength(20))
