const graph = {
    a: ["b", "c"],
    b: ["a", "c", "d"],
    c: ["a", "b", "d"],
    d: ["b", "c"],
    e: ["f"],
    f: ["e"],
};

// worry order:
// 1. is current node in stack visited
// 2. are the neighbours of the current node in stack visited

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

console.log(DFSIterative(graph, "a")); // [ 'a', 'c', 'd', 'b' ]
console.log(DFSIterative(graph, "e")); // [ 'e', 'f' ]

function DFSRecursive(graph, start, visited = new Set()) {
    if (!visited.has(start)) {
        visited.add(start);
        for (const neighbour of graph[start]) {
            DFSRecursive(graph, neighbour, visited);
        }
    }
    return Array.from(visited)
}

console.log(DFSRecursive(graph, "a")); // [ 'a', 'b', 'c', 'd' ]
console.log(DFSRecursive(graph, "e")); // [ 'e', 'f' ]