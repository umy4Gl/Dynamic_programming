

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo); //запоминаем вычисленное 
    return memo[n];
}

console.log(fib(3))
console.log(fib(25))
console.log(fib(50))