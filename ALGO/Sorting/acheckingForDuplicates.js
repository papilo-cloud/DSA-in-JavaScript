
// A practical case fo Bubble Sort Algorithms, having a 
// time complexity of O(N^2) [quadratic time]

// Checking for duplicate numbers.
function hasDuplicate1(array) {
    let steps = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            steps++
            if (i != j && array[i] == array[j]) {
                return true
            }
        }
    }
    console.log(steps)
    return false
}


function hasDuplicate2(array) {
    let steps = 0
    let extArr = []

    for (let i = 0; i < array.length; i++) {
        steps++
        if (extArr[array[i]] === 1) {
            return true
        } else {
            extArr[array[i]] = 1
        }
    }
    console.log(steps)
    return false
}