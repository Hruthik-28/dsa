function fibonacci(n) {
    let first = 0;
    let second = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return first;
}

console.log(fibonacci(10)); // 55

function recFibonacci(n) {
    if (n <= 1) return n;
    return recFibonacci(n - 2) + recFibonacci(n - 1);
}

console.log(recFibonacci(10)); // 55
