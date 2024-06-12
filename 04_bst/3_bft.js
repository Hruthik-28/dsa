// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

const breadthFirstTraversal = (root) => {
    const values = [];

    if (root === null) {
        return values; //empty array
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.key);

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return values;
};

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

const result = breadthFirstTraversal(root);
console.log(result); //[1, 2, 3, 4, 5, 6, 7]
