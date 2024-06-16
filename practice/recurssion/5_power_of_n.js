function powerOfN(num, expo) {
    if (expo === 0) return 1;
    return num * powerOfN(num, expo - 1);
}

console.log(powerOfN(2, 4)); // 16