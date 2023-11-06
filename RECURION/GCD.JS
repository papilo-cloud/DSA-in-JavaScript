// Find Greatest Common Divisor (GCD) of 2 numbers using recursion.

// Solution 1: Using while loop
function GCD1(num1, num2) {
    while (num1 % num2 != 0) {
        let remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }
    return num2;
}


// Solution 1: Using while loop
function GCD2(num1, num2) {
    if (num1 % num2 != 0) {
        return GCD2(num2, num1 % num2);
    } else { 
        return num2;
    }
}

