/**
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} n 
 * @returns 
 */

function frankenSplice(arr1, arr2, n) {
    let changedArr2 = arr2.slice()
    changedArr2.splice(n, 0, ...arr1)
    return changedArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))