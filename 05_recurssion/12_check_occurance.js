// iterative
function checkOcuurance(arr, num) {
    let count = 0;
    for (const elem of arr) {
        if (elem === num) count++;
    }
    return count;
}

console.log(checkOcuurance([2, 2, 3, 4, 5, 7], 2)); // 2

// recursive
function recCheckOccurance(arr, num) {
    if (arr.length === 0) {
        return 0;
    }

    // if (arr[0] === num) {
    //     return 1 + recCheckOccurance(arr.slice(1), num);
    // }
    // return 0 + recCheckOccurance(arr.slice(1), num);

    return (arr[0] === num ? 1 : 0) + recCheckOccurance(arr.slice(1), num);
}

console.log(recCheckOccurance([2, 2, 2, 3, 4, 5, 6], 4)); // 3
