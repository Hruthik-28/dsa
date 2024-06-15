/*
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  a: [b]
  b: [a]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.
*/

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
    console.log(graph);
    return graph;
}

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

function finalFunction(edges, start, dest) {
    const graph = createGraph(edges);
    return hasPathDFS(graph, start, dest);
}

// usage

const edges = [
    ["b", "a"],
    ["c", "a"],
    ["b", "c"],
    ["q", "r"],
    ["q", "s"],
    ["q", "u"],
    ["q", "t"],
];

console.log(finalFunction(edges, "q", "t")); // true
console.log(finalFunction(edges, "a", "t")); // false
