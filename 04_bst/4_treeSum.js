// DFS
const treeSumWithDFS = (root) => {
    let sum = 0;
    if (root === null) {
        return sum;
    }

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        sum += node.key;

        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }

    return sum;
};

// Recursive DFS
const treeSumWithRecursiveDFS = (root) => {
    if (!root) {
        return 0;
    }

    return (
        root.key +
        treeSumWithRecursiveDFS(root.left) +
        treeSumWithRecursiveDFS(root.right)
    );
};

// BFS
const treeSumWithBFS = (root) => {
    let sum = 0;
    if (root === null) {
        return sum;
    }

    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        sum += node.key;

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return sum;
};

// usage
class TreeNode {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(treeSumWithDFS(root));
console.log(treeSumWithBFS(root));
console.log(treeSumWithRecursiveDFS(root));
