// 0 1
// 0 1 1
// 0 1 1 2
// 0 1 1 2 3
// 0 1 1 2 3 5
// 0 1 1 2 3 5 8

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); //8