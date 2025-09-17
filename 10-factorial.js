const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n)) return 1;    // requirement: factorial of NaN is 1
  if (n <= 1) return 1;      // base case: 0! and 1! are 1 (also prevents infinite recursion for negatives)
  return n * factorial(n - 1); // recursive step
}

console.log(factorial(num));
