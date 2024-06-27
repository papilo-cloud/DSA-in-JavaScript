function gcd(x, y) {
    let steps = 0

    while ((x % y) != 0) {
        let remainder = x % y;
        x = y;
        y = remainder
        steps++
    }
    console.log(steps)
    return y
}

console.log(gcd(78, 33))
