// #leetcode
// count vowels

function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
}

function countVowels(string) {
    let count = 0;

    for (const char of string) {
        console.log(isVowel(char));
        if (isVowel(char)) {
            count += 1;
        }
    }
    return count;
}

// console.log(countVowels("Hruthik"));

function recursiveCountVowels(string) {
    if (string.length == 0) {
        return 0;
    }

    const firstCharVowel = Number(isVowel(string[0]));
    return firstCharVowel + recursiveCountVowels(string.slice(1));
}

console.log(recursiveCountVowels("Hello"));
