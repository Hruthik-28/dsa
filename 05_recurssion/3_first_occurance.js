// #leetcode

// arr = [2, 3, 5, 6, 2]
// findeMe = 1;
// currIndex = 0
// Output = 2
//  if not found = -1

// iterative
function firstOcuurance(arr, findMe, currIndex = 0) {
    while (currIndex < arr.length) {
        if (arr[currIndex] === findMe) {
            return currIndex;
        }
        currIndex++;
    }
    return -1;
}

// console.log(firstOcuurance([2, 3, 4, 5, 2], 2));

// 
function recFirstOccurance(arr, findMe, currIndex = 0) {
    if (currIndex === arr.length) {
        return -1;
    }

    if (arr[currIndex] === findMe) {
        return currIndex;
    }

    return recFirstOccurance(arr, findMe, currIndex + 1);
}

console.log(recFirstOccurance([1, 3, 4, 2, 5], 7));
