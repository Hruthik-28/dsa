function checkOccurance(arr, num) {
    let count = 0;
    for (const elem of arr) {
        if (elem === num) count++;
    }
    return count;
}

function recursive(arr, num) {
    if (arr.length === 0) return 0;
    return (arr[0] === num ? 1 : 0) + recursive(arr.slice(1), num);
}

console.log(checkOccurance([2, 3, 4, 2, 2, 5], 2)); // 3
console.log(recursive([2, 3, 4, 2, 2, 5], 2)); //3
