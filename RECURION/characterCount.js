// Use recursion to write a function that accepts an array of strings and
// returns the total number of characters across all the strings. For example,
// if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
// are 10 characters in total.

let array = ["ab", "c", "def", "ghij"];

const characterCount = (array, index = 0) => {
    if(index == array.length ){
        return 0
    }
    return array[index].length + characterCount(array, index + 1)
}

console.log(characterCount(array))