
// Selection Sort takes about half the number
// of steps Bubble Sort does, indicating that Selection Sort is twice as fast.

// Selection Sort as being O(N^2/ 2). That is, for N data elements, there are N^2/ 2 steps.
// Big O Notation ignores constants
// So its efficiency is described as O(N^2)

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestValue = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestValue]) {
                lowestValue = j;
            }            
        }
        if (lowestValue != i) {
            let tempt = array[i];
            array[i] = array[lowestValue];
            array[lowestValue] = tempt;
        }
    }
    return array;
}
const arr = [2,7,3,1,4]
console.log(selectionSort(arr))