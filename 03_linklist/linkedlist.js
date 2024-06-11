class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
    }
}

Linkedlist.prototype.insertAtBegining = function (data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
};

Linkedlist.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);

    // if head is null
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let last = this.head;
    while (last.next) {
        last = last.next;
    }

    last.next = newNode;
};

Linkedlist.prototype.insertAfterGivenNode = function (prevNode, data) {
    if (!prevNode) {
        console.log("The given node should not be null");
        return;
    }
    // make new node having prevNode's next
    const newNode = new Node(data, prevNode.next);
    // now make prevNode's next to newNode
    prevNode.next = newNode;
};

Linkedlist.prototype.deleteFirstNode = function () {
    if (!this.head) return;
    this.head = this.head.next;
};

Linkedlist.prototype.deleteLastNode = function () {
    // check if head is null
    if (!this.head) return; // nothing to delete

    if (!this.head.next) {
        // if LL has only one node
        this.head = null;
        return;
    }

    let secondLast = this.head;
    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;
};

Linkedlist.prototype.deleteNodeWithGivenKey = function (key) {
    if (!this.head) {
        console.log("No nodes in LL");
        return;
    }

    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
        if (currentNode.next.data === key) {
            currentNode.next = currentNode.next.next;
            return;
        }
        currentNode = currentNode.next;
    }

    console.log("no node found with key:", key);
};

Linkedlist.prototype.search = function (key) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.data === key) {
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
};

Linkedlist.prototype.traverse = function () {
    const listValues = [];
    let currentNode = this.head;

    while (currentNode) {
        listValues.push(currentNode.data);
        currentNode = currentNode.next;
    }

    return listValues.length === 0 ? "Empty list" : listValues.join(" -> ");
};

Linkedlist.prototype.reverse = function () {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    this.head = prev;
};

Linkedlist.prototype.insertBeforeGivenNode = function (nextNode, data) {
    if (!nextNode || !this.head) return;

    const newNode = new Node(data, nextNode);

    if (this.head === nextNode) {
        this.insertAtBegining(data);
        return;
    }

    let current = this.head;
    while (current.next !== null) {
        if (current.next === nextNode) {
            current.next = newNode;
            return;
        }
        current = current.next;
    }
};

// Test the linked list
const list = new Linkedlist();

list.insertAtBegining(3);
list.insertAtEnd(5);
list.insertAtBegining(1);
list.insertAfterGivenNode(list.head.next, 4); // Insert 4 after 3

// console.log(JSON.stringify(list)); // Expected: {"head":{"data":1,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}

// console.log(list.search(5)); //true
// console.log(list.search(6)); //false

// list.deleteFirstNode();
// console.log(JSON.stringify(list)); // Expected: {"head":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}

// list.deleteLastNode();
// console.log(JSON.stringify(list)); // Expected: {"head":{"data":3,"next":{"data":4,"next":null}}}

// list.deleteNodeWithGivenKey(4);
// console.log(JSON.stringify(list)); // Expected: {"head":{"data":3,"next":null}}

// console.log(list.traverse());

// list.insertBeforeGivenNode(list.head, 2);
console.log(JSON.stringify(list));
