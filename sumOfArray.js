// Say we have to write a function called sum that sums up all the numbers in
// a given array.

// Solution 1: Using a Loop.
function sum1(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

// Solution 2: Using a Recursion.
function sum2(array, i = 0) {
    if (i == array.length) {
        return 0;
    }
    return array[i] + sum2(array, i + 1);
}