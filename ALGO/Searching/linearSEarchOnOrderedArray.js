// Lineae search on a Ordered Array

function linearSearch(array, searchValue) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        count++
        if (element === searchValue) {
            console.log(`number of steps: ${count}`)
            return index
        } else if (element > searchValue) {
            break
        }
    }
    console.log(`number of steps: ${count}`)
    return 'no match'
}

console.log(linearSearch([3, 17, 75, 80, 202], 8))
