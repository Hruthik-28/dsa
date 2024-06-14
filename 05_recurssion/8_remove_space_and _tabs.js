// iterative
function removeSpaceAndTabs(string) {
    let ans = "";
    for (const char of string) {
        if (char === " " || char === "\t") continue;
        ans += char;
    }
    return ans;
}

console.log(removeSpaceAndTabs("hrut h\tik")); //hruthik

// recursive
function recRemoveSpaceAndTabs(string) {
    if (string.length === 0) {
        return "";
    }
    const firstChar = string[0];
    const restOfString = string.slice(1);

    if (firstChar === " " || firstChar === "\t") {
        return recRemoveSpaceAndTabs(restOfString);
    } else {
        return firstChar + recRemoveSpaceAndTabs(restOfString);
    }
}

console.log(recRemoveSpaceAndTabs("hrut h\tik"));
