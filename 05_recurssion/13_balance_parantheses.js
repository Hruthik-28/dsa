// ["(", "(", ")", ")", "(", ")"]

// iterative
function balanceParantheses(arr) {
    const stack = [];

    for (const parantheses of arr) {
        if (parantheses === "(" || parantheses === "{" || parantheses === "[") {
            stack.push(parantheses);
        } else if (
            parantheses === ")" ||
            parantheses === "}" ||
            parantheses === "]"
        ) {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(balanceParantheses(["(", "{", "}", "[", "]", ")"])); // true
console.log(balanceParantheses(["(", "{", "}", "[", "[", ")"])); // false

// recursive
function recBalanceParantheses(arr, startIndex = 0, count = 0) {
    if (startIndex === arr.length) {
        return count === 0;
    }

    if (count < 0) {
        return false;
    }

    if (arr[startIndex] == "(") {
        return balanceParantheses(arr, startIndex + 1, count);
    } else if (arr[startIndex == ")"]) {
        return balanceParantheses(arr, startIndex + 1, count);
    } else {
        return false;
    }
}

console.log(recBalanceParantheses(["(", "(", ")", ")", "(", ")"])); // true
console.log(recBalanceParantheses(["(", "{", "}", "[", "]", ")"])); // true
console.log(recBalanceParantheses(["(", "{", "}", "[", "[", ")"])); // false
