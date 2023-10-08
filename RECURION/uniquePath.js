// This problem is known as the “Unique Paths” problem: Let’s say you have
// a grid of rows and columns. Write a function that accepts a number of rows
// and a number of columns, and calculates the number of possible “shortest”
// paths from the upper-leftmost square to the lower-rightmost square.

function uniquePath(row, col) {
    if (row == 1 || col == 1) {
      return 1
    }
    return uniquePath(row - 1, col) + uniquePath(row, col - 1);
  }
  
  console.log(uniquePath(3,7))