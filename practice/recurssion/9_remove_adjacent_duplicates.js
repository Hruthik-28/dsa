function removeAdjacentDuplicates(string) {
    let ans = "";
    for (const char of string) {
        if (ans[ans.length - 1] === char) continue;
        ans += char;
    }
    return ans;
}

function recursive(string) {
    if (string === "") {
        return string;
    }

    if (string[0] === string[1]) {
        return string[0] + recursive(string.slice(2));
    }

    return string[0] + recursive(string.slice(1));
}

console.log(removeAdjacentDuplicates("aabcc"));
console.log(recursive("aabcc"));
