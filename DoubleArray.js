// We’re going to write an algorithm that takes an array of numbers and doubles
// each of the numbers within the array. Note that we’re not going to produce
// a new array; instead, we’re going to modify the array in place.

// Solution 1: Using a Loop
const array = [1,2,3,4,5,6];
function DoubleArray1(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i]*2;
    }
    return array;
}
console.log(DoubleArray1(array))


// Solution 2: Using a Recursive approach.

function DoubleArray2(array, i = 0) {
    if (i >= array.length) {
        return
    } else {
        array[i] = array[i] * 2;
        DoubleArray2(array, i + 1)
    }
}
console.log(DoubleArray2(array))
