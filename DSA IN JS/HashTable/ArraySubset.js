// Let’s say we need to determine whether one array is a subset of another array.
// Take these two arrays, for example:

// ["a", "b", "c", "d", "e", "f"]
// ["b", "d", "f"]
// The second array, ["b", "d", "f"] is a subset of the first array, ["a", "b", "c", "d", "e","f"]
//  because every value of the second array is contained within the first array.

// One way we can do this is by using nested loops. Essentially, we’d iterate
// through every element of the smaller array, and for each element in the
// smaller array, we’d then begin a second loop that iterates through each element of the larger array. If we ever find an element in the smaller array that
// isn’t contained within the larger array, our function will return false. If the
// code gets past the loops, it means it never encountered a value in the smaller
// array that wasn’t contained within the larger array, so it returns true.


const arr1 = ["a", "b", "c", "d", "e", "f"]
const arr2 = ["b", "d", "f"]

function isSubst(array1, array2) {
    let largeArray
    let smallArray

    if (array1.length > array2.length) {
        largeArray = array1
        smallArray = array2
    } else {
        largeArray = array2
        smallArray = array1
    }
    for (let i = 0; i < smallArray.length; i++) {
        let foundMatch = false

        for (let j = 0; j < largeArray.length; j++) {
            if (smallArray[i] == largeArray[j]) {
                foundMatch = true;
                break;
            }
        }
        if (foundMatch === false) {
            return false;
        }
    }
    return true;
}
// When we analyze the efficiency of this algorithm, we find that it’s O(N * M),
// since it runs for the number of items in the first array multiplied by the
// number of items in the second array.

// ###########################################################

// Now, let’s harness the power of a hash table to dramatically improve the efficiency of our algorithm. Let’s ditch our original approach and start again from
// scratch.

// In our new approach, after we’ve determined which array is larger and which
// is smaller, we’re going to run a single loop through the larger array, and store
// each value inside of a hash table:


function isSubst(array1, array2) {
    let largeArray
    let smallArray

    if (array1.length > array2.length) {
        largeArray = array1
        smallArray = array2
    } else {
        largeArray = array2
        smallArray = array1
    }
    const hashTable = {};
    for (const val of largeArray) {
        hashTable[val] = 1
    }
    for (const val of smallArray) {
        if (!hashTable[val]) {
            return false
        }
    }
    return true
}
// If we say that N is the total number of items of both arrays combined, our
// algorithm is O(N), since we touched each item just once.