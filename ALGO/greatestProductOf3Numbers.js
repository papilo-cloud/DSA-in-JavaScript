// time complexity is O(N^3)

function largestProduct(array) {
    let 
        largestProductSoFar = array[0]*array[1]*array[2],
        i = 0, j = 0, k = 0;

        while (i < array.length) {
            j = i + 1;
            while (j < array.length) {
                k = j + 1;
                while (k < array.length) {
                    if (array[i]*array[j]*array[k] > largestProductSoFar) {
                        largestProductSoFar = array[i]*array[j]*array[k]
                    }
                    k++
                }
                j++
            }
            i++
        }
        return largestProductSoFar
}

console.log(largestProduct([3,2,6,4,1]))