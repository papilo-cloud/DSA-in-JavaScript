// Lineae search on a Classic Array

function linearSearch(array, searchValue) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === searchValue) {
            return index
        }
    }
    return 'no match'
}

linearSearch([17, 3, 75, 202, 80], 22)