// time complexity is O(N * M)

function findNeedle(needle, haystack) {
    let needleIndex = 0;
    let haystackIndex = 0;
    let foundNeedle = false;

    while (haystackIndex < haystack.length) {
        if (needle[needleIndex] == haystack[haystackIndex]) {
            foundNeedle = true

            while (needleIndex < needle.length) {
                if (needle[needleIndex] != haystack[haystackIndex + needleIndex]) {
                    foundNeedle = false
                    break
                }
                needleIndex++
            }
            if (foundNeedle) {
                return true
            }
            needleIndex = 0
        }
        haystackIndex++
    }
    return false
}

console.log(findNeedle('efi', 'abcdefghij'))