// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function (word1, word2) {
    let merged = "";
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        merged += word1[i];
        merged += word2[j];
        i++;
        j++;
    }

    while (i < word1.length) {
        merged += word1[i];
        i++;
    }
    while (j < word2.length) {
        merged += word2[j];
        j++;
    }

    return merged;
};
