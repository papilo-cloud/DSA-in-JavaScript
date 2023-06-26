
function factorial(n) {
    let stack = [];
    while (n > 0) {
        stack.push(n--)
    }
    let ans = 1;
    while (stack.length > 0) {
        ans *= stack.pop();
    }
    console.log(ans)
}

factorial(4) // 24
factorial(6) // 720