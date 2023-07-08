
function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let tempValue = array[index];
        let position = index - 1;
        while (position >= 0) {
            if (array[position] > tempValue) {
                array[position + 1] = array[position];
            } else {
                break;
            }
            position -= 1;
        }
        array[position + 1] = tempValue;
    }
    return array;
}

const arr = [4,2,7,1,3]
console.log(insertionSort(arr))