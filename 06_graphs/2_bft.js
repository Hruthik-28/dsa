const graph = {
    A: ["B", "C", "D"],
    B: ["A", "E"],
    C: ["A", "F"],
    D: ["A", "G"],
    E: ["B"],
    F: ["C"],
    G: ["D"],
};

//      A
//    / | \
//   B  C  D
//   |  |  |
//   E  F  G

// worry order:
// 1. are the neighbours of the current node in queue visited
// 2. is current node in stack visited

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

console.log(BFSIterative(graph, "A"));
