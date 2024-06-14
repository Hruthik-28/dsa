// find gcd of 2 numbers
// input: 42 and 18
// output: 6
// 42 divisors are 1, 2, 3, 6, 7, 14, 21, 42
// 18 divisors are 1, 2, 3, 6, 9

function gcd(m, n) {
    if (m === n) return m;

    if (m > n) {
        return gcd(m - n, n);
    } else {
        return gcd(m, n - m);
    }
}
console.log(gcd(42, 18));
