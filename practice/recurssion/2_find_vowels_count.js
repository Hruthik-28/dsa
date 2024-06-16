// vowels count

function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

function vowelsCount(string) {
    let count = 0;
    for (const char of string) {
        if (isVowel(char)) {
            count++;
        }
    }
    return count;
}

function recursive(string) {
    if (string === "") {
        return 0;
    }

    return (isVowel(string[0]) ? 1 : 0) + recursive(string.slice(1));
}

console.log(vowelsCount("hruthik"));
console.log(recursive("hruthik"));
