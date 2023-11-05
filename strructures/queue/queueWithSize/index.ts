class QueueWithSize {
    private queue: number[];
    private size = 0;
    private head = 0;
    private tail = 0;

    constructor(size: number) {
        this.queue = new Array(size);
    }

    public getQueue = () => this.queue;

    public enqueue = (value: number) => {
        if (this.size === this.queue.length) throw new Error("Queue max size exeeded");

        this.queue[this.tail] = value;
        ++this.size;

        if (this.tail === this.queue.length - 1) this.tail = 0;
        else ++this.tail;
    };

    public dequeue = () => {
        if (this.size === 0) return null;

        const tmp = this.queue[this.head];
        --this.size;

        if (this.head === this.queue.length - 1) this.head = 0;
        else ++this.head;

        return tmp;
    };
}

const q1 = new QueueWithSize(3);

console.log(q1.enqueue(1));
console.log(q1.enqueue(2));
console.log(q1.dequeue());
console.log(q1.enqueue(3));
console.log(q1.enqueue(4));
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.enqueue(5));
console.log(q1.enqueue(6));
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.getQueue());
