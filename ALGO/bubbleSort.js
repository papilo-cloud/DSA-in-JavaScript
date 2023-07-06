

function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i< array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                let tempt = array[i];
                array[i] = array[i+1];
                array[i+1] = tempt
            }
        }
    }
    return array
}
let arr = [2,1,3,7,4,9,0,7] ;
console.log(bubbleSort(arr))