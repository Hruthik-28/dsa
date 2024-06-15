const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};

//      A
//    /   \
//   B     C
//  / \   / \
// D   E F   |
// \________/

function DFSIterative(graph, start, visited = new Set()) {
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                if (!visited.has(neighbour)) {
                    stack.push(neighbour);
                }
            }
        }
    }

    return Array.from(visited);
}

console.log(DFSIterative(graph, "A")); // [ 'A', 'C', 'F', 'E', 'B', 'D' ]

function DFSRecursive(graph, start, visited = new Set()) {
    if (!visited.has(start)) {
        visited.add(start);

        for (const neighbour of graph[start]) {
            DFSRecursive(graph, neighbour, visited);
        }
    }

    return Array.from(visited);
}
console.log(DFSRecursive(graph, "A")); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]

function BFSIterative(graph, start, visited = new Set()) {
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }

    return Array.from(visited);
}

console.log(BFSIterative(graph, "A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
