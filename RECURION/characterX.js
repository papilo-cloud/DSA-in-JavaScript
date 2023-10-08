// Use recursion to write a function that accepts a string and returns the
// first index that contains the character “x.” For example, the string,
// "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple,
// assume the string definitely has at least one “x.”
const character = 'abcdefghijklmnopqrstuvwxyz'

const characterX = (str, index = 0) => {
   if (index == str.length) {
    return ''
   }
   if (str[index] == 'x') {
    return index + characterX(str, index + 1)
   } else {
    return characterX(str, index + 1)
   }
}
console.log(characterX(character))