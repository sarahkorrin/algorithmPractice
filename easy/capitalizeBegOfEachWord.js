/**
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 * @param {*} str 
 * @returns 
 */

function titleCase(str) {
    let strArr = str.toLowerCase().split(' ')
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1)
    }
    let newStr = strArr.join(' ')
    return newStr;
}

titleCase("I'm a little tea pot");