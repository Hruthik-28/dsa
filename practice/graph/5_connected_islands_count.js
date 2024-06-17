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

function countConnectedIslands(graph) {
    const visited = new Set();
    let count = 0;

    function dfs(node) {
        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                dfs(neighbour);
            }
        }
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
            count++;
        }
    }

    return count;
}
console.log(countConnectedIslands(graph));
