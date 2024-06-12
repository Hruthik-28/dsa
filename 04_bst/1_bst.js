class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insertion
    insert(key) {
        const newNode = new BSTNode(key);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    #insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    // deletion
    delete(key) {
        this.root = this.#deleteNode(this.root, key);
    }

    #deleteNode(node, key) {
        if (key < node.key) {
            node.left = this.#deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.#deleteNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                const tempNode = this.#findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.#deleteNode(node.right, tempNode.key);

                // const tempNode = this.#findMaxNode(node.left);
                // node.key = tempNode.key;
                // node.left = this.#deleteNode(node.left, tempNode.key);
            }
        }
        return node;
    }

    #findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    #findMaxNode(node) {
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    // preorder traversal
    preOrderTraversal() {
        const result = [];
        this.#preOrder(this.root, result);
        return result;
    }

    #preOrder(node, result) {
        if (node !== null) {
            result.push(node.key);
            this.#preOrder(node.left, result);
            this.#preOrder(node.right, result);
        }
    }

    // inorder traversal
    inOrderTraversal() {
        const result = [];
        this.#inOrder(this.root, result);
        return result;
    }

    #inOrder(node, result) {
        if (node !== null) {
            this.#inOrder(node.left, result);
            result.push(node.key);
            this.#inOrder(node.right, result);
        }
    }

    // postorder traversal
    postOrderTraversal() {
        const result = [];
        this.#postOrder(this.root, result);
        return result;
    }

    #postOrder(node, result) {
        if (node !== null) {
            this.#postOrder(node.left, result);
            this.#postOrder(node.right, result);
            result.push(node.key);
        }
    }
}

// usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(15);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(3);
bst.delete(2);

console.log(bst.preOrderTraversal());
console.log(bst.inOrderTraversal());
console.log(bst.postOrderTraversal());
