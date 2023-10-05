// Let’s write a function called count_x that returns the number of “x’s” in a given string. If our function is passed
// the string, "axbxcxd", it’ll return 3, since there are three instances of the character “x.”

const str = 'axbxcxd'
// Solution 1: Using a Loop. 
function count_x1(string) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'x') {
            result += 1
        }
    }
    return result;
}
count_x1(str)


// Solution 2: Using a Recursion.
function count_x2(string, index = 0) {
    if (index == string.length) {
        return 0
    }
    if (string[index] == 'x') {
         return 1 + count_x2(string, index + 1)
    }else{
        return count_x2(string, index + 1)
    }
}
count_x2(str)