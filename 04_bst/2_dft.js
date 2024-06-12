// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

const depthFirstTraversal = (root) => {
    const values = [];

    if (root === null) {
        return values; // return message or empty array
    }

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.key);

        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return values;
};

const recursiveDFT = (root) => {
    if (root === null) {
        return [];
    }

    const leftValues = recursiveDFT(root.left);
    const rightValues = recursiveDFT(root.right);

    // return [root.key, leftValues, rightValues]
    // [a, [b, c, d], [e, f, g]]

    return [root.key, ...leftValues, ...rightValues];
    // [a, b, c, d, e, f, g]
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

const result1 = depthFirstTraversal(root);
const result2 = recursiveDFT(root);
console.log(result1); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log(result2); // Output: [1, 2, 4, 5, 3, 6, 7]



