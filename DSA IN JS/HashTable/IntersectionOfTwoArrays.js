// Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two
// arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
// Your function should have a complexity of O(N). (If your programming
// language has a built-in way of doing this, don’t use it. The idea is to build
// the algorithm yourself.)

// 1. The efficiency of intersection1 is O(N^2)
function intersection1(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(i);
            }
        }
    }
    return result;
}


// 2. The efficiency of intersection2 is O(N) which is the required case.

function intersection2(arr1, arr2) {
    let result = {}
    const ans = [];
    for (const value of arr1) {
        result[value] = 1;
    }
    for (const value of arr2) {
        if(result[value]){
            ans.push(value)
        }
    }
    return ans;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [0, 2, 4, 6, 8];
