// ['(', '(', ')', ')', '(', ')']

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
        } else {
            continue;
        }
    }

    return stack.length === 0;
}

// for ( -> count+1, ) -> count-1
function recursive(arr, currentIndex = 0, count = 0) {
    if (currentIndex === arr.length) {
        return count === 0;
    }

    if (count < 0) {
        return false;
    }

    if (arr[currentIndex] === "(") {
        count++;
    } else if (arr[currentIndex] === ")") {
        count--;
    } else {
        return false;
    }
    return recursive(arr, currentIndex + 1, count);
}

console.log(balanceParantheses(["(", "(", ")", ")", "(", ")"]));
console.log(recursive(["(", "(", ")", ")", "(", ")"]));
