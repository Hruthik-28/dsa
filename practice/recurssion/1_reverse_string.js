// reverse a string

function reverseString(string) {
    let ans = "";
    for (let i = string.length - 1; i >= 0; i--) {
        ans += string[i];
    }
    return ans;
}

console.log(reverseString("hello"));

function recursive(string) {
    if (string === "") {
        return string;
    }

    const lastChar = string[string.length - 1];

    return lastChar + recursive(string.substring(0, string.length - 1));
}

console.log(recursive("hello"));