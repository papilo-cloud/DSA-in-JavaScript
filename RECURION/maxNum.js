// Here’s a recursive function that finds the greatest number from an array:

const arr = [0,12,3,2,7,8,9,10,51]

function maxNum(array, index = 0) {
    if (index == array.length) {
        return array[0]
    }
    if (array[index] > maxNum(array, index + 1)) {
        return array[index];
    } else {
        return maxNum(array, index + 1);
    }
}

console.log(maxNum(arr))