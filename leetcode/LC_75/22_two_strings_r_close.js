// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"



// check for length of both strings
// construct freqMap for both strings
// extract keys => match keys in both freqMaps
// extract values(freq) => Array => sort => compare
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const map1 = new Map();
    const map2 = new Map();

    for (const char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for (const char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }

    const set1 = new Set(map1.keys());
    const set2 = new Set(map2.keys());
    if (![...set1].every(key => set2.has(key))) return false;

    const freq1 = [...map1.values()].sort((a, b) => a - b).join("");
    const freq2 = [...map2.values()].sort((a, b) => a - b).join("");

    return freq1 === freq2;
};