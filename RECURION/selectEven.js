// Use recursion to write a function that accepts an array of numbers and
// returns a new array containing just the even numbers.

let array = [1,2,3,4,5,7,8,9,10];

const selectEven = (array, index = 0) => {
    if (index == array.length) {
        return []
    } else {
        if (array[index]%2 == 0) {
            return [array[index]] +','+ selectEven(array, index + 1)
        } else {
            return selectEven(array, index + 1)
        }
    }
  }

  console.log(selectEven(array))
