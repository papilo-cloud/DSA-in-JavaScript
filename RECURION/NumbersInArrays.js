// Here is an array containing both numbers as well as other arrays, which
// in turn contain numbers and arrays:
// Write a recursive function that prints all the numbers (and just numbers).

const array = [ 1,2,3,[4, 5, 6],7,[8,[9, 10, 11,[12, 13, 14]]],[15, 16, 17, 18, 19,[20, 21, 22,[23, 24, 25,[26, 27, 29]], 30, 31], 32], 33]

function myArr(array){
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element instanceof Array) {
            myArr(element);
        } else {
            console.log(element);
        }
    }
}
myArr(array)