class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        this.stack.pop();
    }

    peak() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }

    contains(data) {
        return this.stack.includes(data);
    }

    reverse() {
        this.stack.reverse();
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n";
        }
        return str;
    }
}

// usage eg
let myStack = new Stack();
myStack.push(4);
myStack.push(2);
myStack.push(1);

console.log(myStack.pop());

console.log(myStack.printStack());
