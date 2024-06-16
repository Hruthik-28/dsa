function customLength(string) {
    let length = 0;
    for (const char of string) {
        length++;
    }
    return length;
}

function recursive(string) {
    if (string === "") {
        return 0;
    }
    return 1 + recursive(string.slice(1));
}

console.log(customLength("hruthik"));
console.log(recursive("hruthik"));