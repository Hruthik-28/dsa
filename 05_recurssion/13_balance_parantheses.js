// ["(", "(", ")", ")", "(", ")"]

// iterative
function balanceParantheses(arr) {
    const stack = [];

    for (const parantheses of arr) {
        if (parantheses === "(") {
            stack.push(parantheses);
        } else if (parantheses === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(balanceParantheses(["(", "(", ")", ")", "(", ")"])); // true
