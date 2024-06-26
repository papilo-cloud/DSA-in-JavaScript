

function meanAvgOfEvenNum(array) {
    let sum = 0;
    let countOfEvenNum = 0;
    let steps = 0
    for (let i = 0; i < array.length; i++) {
        steps++
        if (array[i] % 2 == 0) {
            sum += array[i];
            countOfEvenNum += 1
        }
    }
    console.log(steps)
    return (sum / countOfEvenNum)
}
console.log(meanAvgOfEvenNum([1,2,3,4,5,6,7,8, 2]))