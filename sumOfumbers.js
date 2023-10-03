// Following is a function in which we pass in two numbers called low and
// high. The function returns the sum of all the numbers from low to high.

function sum(low, high) {
    if (high == 1) {
        return high;
    } else {
        return high + sum(low, high - 1);
    }
}

console.log(sum(1, 10));