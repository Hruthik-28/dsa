// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        while (i < j && !isVowel(s[i])) i++;
        while (i < j && !isVowel(s[j])) j--;

        // swap
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }

    return s.join("");
};

function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
}
