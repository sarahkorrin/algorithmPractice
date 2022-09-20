/**
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. Remove all elements from the initial array that are of the 
 * same value as these arguments.
 * Note: You have to use the arguments object.
 * @param {*} arr 
 * @returns 
 */

function destroyer(arr) {
    let argumentArr = Array.from(arguments)
    console.log(argumentArr)
    let initialArr = argumentArr.shift()
    console.log(initialArr)
    console.log(argumentArr)

    let newArr = []

    for (let i = 0; i < initialArr.length; i++) {
        if (argumentArr.indexOf(initialArr[i]) == -1) {
            newArr.push(initialArr[i])
        }
    }


    return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);