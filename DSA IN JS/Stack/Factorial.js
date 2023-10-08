// To demonstrate how recursion is implemented using a stack, let’s consider a recursive
// definition of the factorial function. First, here is a definition of factorial for the number
// 5:
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// Here is a recursive function to compute the factorial of any number:

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