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

function biggestIsland(graph) {
    const visited = new Set();
    let largestIsland = 0;

    function dfs(start) {
        const stack = [start];
        let count = 0;

        while (stack.length > 0) {
            const node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                count++;
                for (const neighbour of graph[node]) {
                    if (!visited.has(neighbour)) {
                        stack.push(neighbour);
                    }
                }
            }
        }
        return count;
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            const size = dfs(node);
            if (size > largestIsland) {
                largestIsland = size;
            }
        }
    }

    return largestIsland;
}

console.log(biggestIsland(graph)); //5
