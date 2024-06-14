function length(string) {
    let count = 0;
    for (const char of string) {
        count++;
    }
    return count;
}

console.log(length("hruthik"));

function recursiveLength(string) {
    if (string === "") {
        return 0;
    }
    return 1 + recursiveLength(string.slice(1));
}

console.log(recursiveLength("hruthik"));
