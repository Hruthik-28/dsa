function tribMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    memo[n] =
        tribMemo(n - 1, memo) + tribMemo(n - 2, memo) + tribMemo(n - 3, memo);

    return memo[n];
}

console.log(tribMemo(55));

function tribTab(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    const table = Array(n + 1).fill(0);

    table[1] = table[2] = 1;

    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2] + table[i - 3];
    }

    return table[n];
}

console.log(tribTab(55));