// 1. The efficiency of duplicate is O(N^2)

function duplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if (i != j && array[i] == array[j]) {
                return array[i]
           }
        }
    }
}

// 2. The efficiency of duplicate1 is O(N) which is the required case.

function duplicate1(array) {
    let obj = {};
    for (const key of array) {
        if (obj[key] == undefined) {
            obj[key] = 1
        } else{
            return key
        }
    }
}

let array = ['a','v','b','f','h','b','i','j','k']

console.log(duplicate1(array))