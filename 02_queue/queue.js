class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peak() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

    printQueue() {
        let str = "";
        for (const elem of this.queue) {
            str += elem + "\n";
        }
        return str;
    }
}

// usage eg

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(1);
myQueue.dequeue();
console.log(myQueue.printQueue());



