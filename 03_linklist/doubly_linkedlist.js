class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, this.head, null);

    if (this.head !== null) {
        this.head.prev = newNode;
    }

    this.head = newNode;
    if (this.tail === null) {
        this.tail = newNode;
    }
};
DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {
        this.tail.next = newNode;
    }

    this.tail = newNode;
    if (this.head === null) {
        this.head = newNode;
    }
};
DoublyLinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
    if (prevNode == null) {
        console.log("Invalid prev node");
        return;
    }

    const newNode = new Node(data, prevNode.next, prevNode);

    if (prevNode.next !== null) {
        prevNode.next.prev = newNode;
    }

    prevNode.next = newNode;
    if (newNode.next == null) {
        this.tail = newNode;
    }
};
DoublyLinkedList.prototype.deleteFirstNode = function () {
    if (this.head === null) return;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
};
DoublyLinkedList.prototype.deleteLastNode = function () {
    if (this.head === null) return;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
};
DoublyLinkedList.prototype.traverse = function () {
    const list = [];
    let current = this.head;
    while (current) {
        list.push(current.data);
        current = current.next;
    }
    return list.length === 0 ? "DLL is emtpy" : list.join(" <==> ");
};
DoublyLinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;

    while (current) {
        // swap
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        // move to next node
        current = current.prev;
    }
    if (temp !== null) {
        this.tail = this.head;
        this.head = temp.prev;
    }
};

const dll = new DoublyLinkedList();
dll.insertAtBeginning(1);
dll.insertAtBeginning(2);
dll.insertAtBeginning(3);
dll.reverse();

console.log(dll.traverse());
