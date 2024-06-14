function sumOfN(n) {
    if (n == 1) return n;
    return n + sumOfN(n - 1);
}

console.log(sumOfN(4)); // 10