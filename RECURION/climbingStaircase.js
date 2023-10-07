// Let’s say we have a staircase of N steps, and a person has the ability to climb
// one, two, or three steps at a time. How many different possible “paths” can
// someone take to reach the top? Write a function that will calculate this for N
// steps

function num_of_paths(n) {
    if (n < 0) {
        return 0
    }
    if (n == 0) {
        return 1
    }
    return num_of_paths(n-1) + num_of_paths(n-2) + num_of_paths(n-3);
}
console.log(num_of_paths(1));