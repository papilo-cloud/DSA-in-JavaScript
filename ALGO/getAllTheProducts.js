// time complexity is approximately O(N^2)

function twoNumberProduct(array) {
    let product = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            product.push(array[i] * array[j])
        }
    }
    return product
}

console.log(twoNumberProduct([1,2,3,4,5]))