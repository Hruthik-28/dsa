/*
Given two nodes (start and dest) in a directed acyclic graph
(DAG), return true if there is a directed path from start to
dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 3

Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/

function hasPathDFS(graph, start, dest) {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (node === dest) return true;

        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                stack.push(neighbour);
            }
        }
    }

    return false;
}

function hasPathBFS(graph, start, dest) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === dest) return true;

        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                queue.push(neighbour);
            }
        }
    }

    return false;
}

function hasPathRecurssion(graph, start, dest, visited = new Set()) {
    if (start === dest) return true;

    if (visited.has(start)) return false;

    visited.add(start);

    for (const neighbour of graph[start]) {
        if (hasPathRecurssion(graph, neighbour, dest) === true) {
            return true;
        }
    }

    return false;
}

// usage
const graph = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5],
    5: [],
};

//      1
//     / \
//    2   3
//    |
//    4
//    |
//    5

console.log(hasPathDFS(graph, 1, 5)); // true
console.log(hasPathBFS(graph, 1, 5)); // true
console.log(hasPathRecurssion(graph, 1, 5)); //true

console.log(hasPathDFS(graph, 3, 5)); // false
console.log(hasPathBFS(graph, 3, 5)); // false
console.log(hasPathRecurssion(graph, 3, 5)); //false