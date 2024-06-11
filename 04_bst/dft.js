// standalone tree

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
