function shortestPath(edges, start, dest) {
    const graph = createGraph(edges);
    const visited = new Set([start]);
    const queue = [[start, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === dest) {
            return [node, distance];
        }

        // worry about neighbours
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push([neighbour, distance + 1]);
            }
        }
    }
}

function createGraph(edges) {
    const graph = {};

    for (const edge of edges) {
        const [edge1, edge2] = edge;
        if (!(edge1 in graph)) {
            graph[edge1] = [];
        }
        if (!(edge2 in graph)) {
            graph[edge2] = [];
        }
        graph[edge1].push(edge2);
        graph[edge2].push(edge1);
    }
    return graph;
}

const edges = [
    [1, 2],
    [1, 4],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [5, 7],
    [6, 7],
  ];


//      1
//     / \
//    2   4
//   / \ / \
//  3   -   6
//   \ / \ /
//    5   -
//    \ /
//     7



console.log(shortestPath(edges, 1, 7)); //[ 7, 3 ]
