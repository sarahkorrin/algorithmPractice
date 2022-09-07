/**
 * Truncate a string (first argument) if it is longer than the given maximum 
 * string length (second argument). Return the truncated string with a ... ending.
 */

function truncateString(str, num) {
    if (str.length > num) {
        let newStr = str.substr(0, num) + '...'
        return newStr
    }
    else {
        return str
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/**
 * Waiting:truncateString("A-tisket a-tasket A green and yellow basket", 8) 
 * should return the string A-tisket...
 */