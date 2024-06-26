// time complexity is approximately O(N)

function oneHundredSum(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < (array.length / 2)) {
        if ((array[leftIndex] + array[rightIndex]) != 100) {
            return false
        }
        leftIndex++;
        rightIndex--
    }
    return true
}

console.log(oneHundredSum([90,20,45,30,70,55,80,10]))