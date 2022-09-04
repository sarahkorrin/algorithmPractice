/**
 * Write an algorithm that take a number, n, and returns a number
 * that multiplies all positive numbers below (excluding 0) and including n.
 * N must be larger than 0.
 */

function factorial(n) {
    let multiplyFactorial = 1
    if (n <= 0) {
        return 'Invalid entry. Please input a number greater than 0.'
    }
    else {
        for (let i = n; i > 0; i--) {
            multiplyFactorial *= i
        }
        return multiplyFactorial
    }
}

console.log(factorial(6))

