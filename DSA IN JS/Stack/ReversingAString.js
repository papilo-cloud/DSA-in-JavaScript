// Write a function that uses a stack to reverse a string. (For example, "abcde" would become "edcba".)

function reverseString(array) {
    let stack = [];
    revArr = '';
    for (let i = 0; i < array.length; i++) {
        stack.push(array[i])
    }
    while (stack.length > 0) {
        revArr += stack.pop()
    }
    return revArr
}

console.log('abcde')
console.log(reverseString('abcde')) //edcba