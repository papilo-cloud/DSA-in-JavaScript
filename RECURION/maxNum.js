// Here’s a recursive function that finds the greatest number from an array:

const arr = [0,12,3,2,7,8,9,10,51]

function maxNum(array, index = 0) {
    if (index == array.length) {
        return array[0]
    }
    
    //   Calculate the max of the remainder of the array
    //   and store it inside a variable:
    let max = maxNum(array, index + 1)

    // Comparison of first number against this variable:

    if (array[index] > max) {
        return array[index];
    } else {
        return max;
    }
}

console.log(maxNum(arr))