// Lineae search on a Classic Array

function linearSearch(array, searchValue) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        count++
        if (element === searchValue) {
            console.log(`number of steps: ${count}`)
            return `found at index: ${index}`
        }
    }
    console.log(`number of steps: ${count}`)
    return 'no match'
}

linearSearch([17, 3, 75, 202, 80], 22)