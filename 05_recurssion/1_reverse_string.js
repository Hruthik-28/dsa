// Reverse a string

// iterative
// Hello

function reverseAString(s) {
    let ans = "";
    let length = s.length - 1;

    while (length >= 0) {
        ans += s[length--];
    }

    // for (let i = length; i >= 0; i--) {
    //     ans += s[length];
    // }
    return ans;
}

// console.log(reverseAString("Hello"));

function recursiveReverseString(string) {
    console.log(`current String: ${string}`);
    // base case
    if (string === "") {
        return string;
    }

    let reverse = recursiveReverseString(
        string.substring(0, string.length - 1)
    );
    let result = string[string.length - 1] + reverse;

    // console.log(`last char: ${string[string.length -1]} added in front of ${reverse} to form ${string}`)

    return result;
}
console.log(recursiveReverseString("Hello"));