// time complexity is O(N)

function isPalindrome(string) {
    let leftIndex = 0;
    let rightIndex = string.length - 1;
    let steps = 0

    while (leftIndex < (string.length / 2)) {
        steps++
        if (string[leftIndex] != string[rightIndex]) {
            return false
        }
        leftIndex++;
        rightIndex--;
    }
    console.log(steps)
    return true
}

console.log(isPalindrome('sracecars'))