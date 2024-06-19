/*
"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false
*/

function coinSum(amt, arr, memo = {}) {
    if (amt in memo) return memo[amt];
    if (amt === 0) return true;
    if (amt < 0) return false;

    for (const num of arr) {
        if (coinSum(amt - num, arr, memo) === true) {
            memo[amt] = true;
            return true;
        }
    }

    memo[amt] = false;
    return false;
}
console.log(coinSum(15, [4, 6, 10]));
