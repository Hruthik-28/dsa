// REVISIT
// iterative
function removeAdjacentDuplicates(string) {
    let ans = "";

    for (const char of string) {
        if (ans[ans.length - 1] === char) continue;
        ans += char;
    }
    return ans;
}

console.log(removeAdjacentDuplicates("aabcc"));//abc

function recRemoveAdjacentDuplicates(string) {
    if (string.length <= 1) {
        return string;
    }
    if (string[0] === string[1]) {
        return string.substring(1);
    }
    return (
        recRemoveAdjacentDuplicates(string[0]) +
        recRemoveAdjacentDuplicates(string.substring(1))
    );
}
console.log(removeAdjacentDuplicates("aabccc"));//abc
