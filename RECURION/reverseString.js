// We’re going to write a reverse function that reverses
// a string. So, if the function accepts the argument "abcde", it’ll return "edcba".

const string = 'abcde'

// Solution 1: Using a Loop. 
function reverse1(array) {
    let ans = '';
    for (let i = array.length - 1; i >= 0; i--) {
       ans += array[i];
    }
    return ans;
}
reverse1(string)


// Solution 2: Using a Recursion. 
function reverse2(array, index = array.length-1) {
    
    if (index == 0) {
        return array[0];
    }
    return array[index]+sums(array, index-1)
}
reverse2(string)