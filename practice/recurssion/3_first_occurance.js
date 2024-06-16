// #leetcode

// arr = [2, 3, 5, 6, 5, 2]
// findeMe = 1;
// currIndex = 0
// Output = 2
//  if not found = -1

function findMe(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i;
        }
    }
    return -1;
}

function recursiveFindMe(arr, num, currentIndex = 0) {
    if (arr.length === 0) {
        return -1;
    }

    if (num === arr[currentIndex]) {
        return currentIndex;
    }

    return recursiveFindMe(arr, num, currentIndex + 1);
}

const arr = [2, 3, 5, 6, 5, 2];
console.log(findMe(arr, 2));
console.log(recursiveFindMe(arr, 2));
