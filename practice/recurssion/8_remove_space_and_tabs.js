function removeSpaceAndTabs(string) {
    let ans = "";
    for (const char of string) {
        if (char === " " || char === "\t") continue;
        ans += char;
    }
    return ans
}

function recursive(string) {
    if (string === "") {
        return string;
    }
    if (string[0] === " " || string[0] === "\t") {
        return recursive(string.slice(1));
    }
    return string[0] + recursive(string.slice(1));
}

console.log(removeSpaceAndTabs("hru th\tik")); //hruthik
console.log(recursive("hru th\tik")); //hruthik
