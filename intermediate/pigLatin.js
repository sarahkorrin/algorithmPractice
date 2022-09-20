/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * If a word begins with a consonant, take the first consonant or consonant cluster, 
 * move it to the end of the word, and add ay to it.
 * 
 * If a word begins with a vowel, just add way at the end.
 * 
 * Translate the provided string to Pig Latin. 
 * Input strings are guaranteed to be English words in all lowercase.
 * 
 * @param {*} str 
 * @returns 
 */

function translatePigLatin(str) {
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
    let consonantClusterArr = ['gl', 'schw']
    let newStr


    for (let i = 0; i < vowelArr.length; i++) {
        if (str[0] == vowelArr[i]) {
            newStr = str + 'way'
            console.log(newStr)
        }

        // else {
        //   for (let j = 0; j < consonantClusterArr.length; j++) {
        //     if (str.startsWith(consonantClusterArr[0])) {
        //       let glSubStr = str.substr(0, 2)
        //       console.log(glSubStr)
        //       newStr = str + glSubStr + 'ay'
        //       }
        //     else if (str.startsWith(consonantClusterArr[1])) {
        //       let schwSubStr = str.substr(0, 4)
        //       console.log(schwSubStr)
        //       newStr = str + schwSubStr + 'ay'
        //       }
        //       else {
        //         newStr = str + 'ay'
        //         }
        //       }
        //       }
        //   }

    }
    return newStr;
}

translatePigLatin("consonant");

/**
 * EXPECTED OUTPUT:
 * ---------------------------------------------------------------------------
 * translatePigLatin("california") should return the string aliforniacay.
 *
 * translatePigLatin("paragraphs") should return the string aragraphspay.
 *
 * translatePigLatin("glove") should return the string oveglay.
 *
 * translatePigLatin("algorithm") should return the string algorithmway.
 *
 * translatePigLatin("eight") should return the string eightway.
 *
 * Should handle words where the first vowel comes in the middle of the word.
 * translatePigLatin("schwartz") should return the string artzschway.
 *
 * Should handle words without vowels.
 * translatePigLatin("rhythm") should return the string rhythmay.
 * ---------------------------------------------------------------------------
 */