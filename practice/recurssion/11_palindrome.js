// madam
function isPalindrome(string) {
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string[i] !== string[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function recursive(string) {
    if (string.length === 1) {
        return true;
    }

    if (string[0] !== string[string.length - 1]) {
        return false;
    }

    return recursive(string.substring(1, string.length - 1));
}

console.log(isPalindrome("madam"));
console.log(recursive("madam"));
