// Write a function that accepts a string that contains all the letters of the
// alphabet except one and returns the missing letter. For example, the string,
// "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
// except the letter, "f". The function should have a time complexity of O(N).


function missingLetters(string) {
    const obj = {};
    for (let i = 0; i < string.length; i++) {
        const str = string[i];
        obj[str] = 1;
    }
    // return obj;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let j = 0; j < alphabet.length; j++) {
        const alpha = alphabet[j]
        if (!obj[alpha]) {
            return alpha
            break
        } else{
            
        }
    }
}

const string = "the quick grown fox jumps over a lazy dog";
console.log(missingLetters(string))