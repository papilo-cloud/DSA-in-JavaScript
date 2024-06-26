// Time complexity is O(N)

function avgCelcius(fahrenheitReading) {
    let celsiusNum = []
    let steps = 0
    let sum = 0
    for (const element of fahrenheitReading) {
        const celsiusConversion = (element - 32) * (5/9)
        celsiusNum.push(celsiusConversion)
    }

    for (const element of celsiusNum) {
        sum += element
    }
   
    return (sum / celsiusNum.length)
}

console.log(avgCelcius([93, 113, 49, 32, 64]))