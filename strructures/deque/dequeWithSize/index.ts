class DequeWithSize {
    private deque: number[];
    private size: number = 0;
    private top = 0;
    private bottom = 0;

    constructor(size: number) {
        this.deque = new Array(size);
        this.top = size - 1;
    }

    public getDeque = () => this.deque;

    public push = (value: number) => {
        if (this.size === this.deque.length) throw new Error("Deque max size exeeded");

        this.deque[this.top] = value;
        ++this.size;

        if (this.top === 0) this.top = this.deque.length - 1;
        else --this.top;
    };

    public pop = () => {
        if (this.size === 0) return null;

        if (this.top === this.deque.length - 1) this.top = -1;

        --this.size;
        return this.deque[++this.top];
    };

    public enqueue = (value: number) => {
        if (this.size === this.deque.length) throw new Error("Deque max size exeeded");

        this.deque[this.bottom] = value;
        ++this.size;

        if (this.bottom === this.deque.length - 1) this.bottom = 0;
        else ++this.bottom;
    };

    public dequeue = () => {
        if (this.size === 0) return null;

        if (this.bottom === 0) this.bottom = this.deque.length;

        --this.size;
        return this.deque[--this.bottom];
    };
}

const deque = new DequeWithSize(6);

console.log(deque.enqueue(1), deque.getDeque());
console.log(deque.enqueue(2), deque.getDeque());
console.log(deque.enqueue(3), deque.getDeque());

console.log(deque.push(10), deque.getDeque());
console.log(deque.push(20), deque.getDeque());
console.log(deque.push(30), deque.getDeque());

console.log(deque.dequeue());
console.log(deque.dequeue());
console.log(deque.dequeue());
console.log(deque.dequeue());

console.log(deque.pop());

console.log(deque.enqueue(4), deque.getDeque());
