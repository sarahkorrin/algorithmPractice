/**
 * Write an algorithm to count backwards from a given number.
 * Output an array of even integers.
 */

function countBackwardsEven(num) {
    let evenArr = []
    for (let i = num; i > 0; i--) {
        if (i % 2 == 0) {
            evenArr.push(i)
        }
    }
    return evenArr
}

console.log(countBackwardsEven(5))
