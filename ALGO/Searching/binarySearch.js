function binarySEarch(array, searchValue) {
    let lowerBound = 0;
    let upperBound = array.length - 1
    let count = 0
  
    do {
        midPoint = Math.floor((upperBound + lowerBound) / 2)
        valAtMidPoint = array[midPoint]
        count++
        if (valAtMidPoint == searchValue) {
            console.log(`number of steps: ${count}`)
            return `value found at index: ${midPoint}`
        } else if (valAtMidPoint < searchValue) {
            lowerBound = midPoint + 1
        } else if (valAtMidPoint > searchValue){
            upperBound = midPoint - 1
        }
    } while (lowerBound <= upperBound);
    return 'no matching value'
}

console.log(binarySEarch([1,2,3,4,5,6,7,8,9 ], 9))