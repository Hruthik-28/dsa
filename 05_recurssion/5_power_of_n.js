// iterative
function powerOfN(num, power) {
    let ans = 1;
    for (let i = 1; i <= power; i++) {
        ans *= num;
    }
    return ans;
    // return Math.pow(num, power);
}

console.log(powerOfN(2, 2)); //8

// recursive
function recPowerOfN(num, power) {
    if (power === 0) return 1;
    return num * recPowerOfN(num, power - 1);
}

console.log(recPowerOfN(2, 3)); // 8
