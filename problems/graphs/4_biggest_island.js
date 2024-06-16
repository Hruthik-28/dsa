const graph = {
    1: ["2", "3"],
    2: ["1", "3"],
    3: ["2"],
    4: ["5"],
    5: ["4", "6", "7"],
    6: ["5"],
    7: ["5", "8"],
    8: ["7"],
    9: [],
};

// iterate graph => encounter unvisited node =>

function biggestIsland(graph) {
    const visited = new Set();
    let largest = 0;

    function dfs(node) {
        if (visited.has(node)) {
            return 0;
        }
        visited.add(node);
        let size = 1;
        for (const neighbour of graph[node]) {
            size = size + dfs(neighbour)
        }
        return size;
    }

    // iterate over graph
    for (const node in graph) {
        if (!visited.has(node)) {
            const componentSize = dfs(node);
            if (componentSize > largest) {
                largest = componentSize;
            }
        }
    }

    return largest;
}

console.log(biggestIsland(graph));