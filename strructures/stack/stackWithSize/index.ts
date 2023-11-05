class StackWithSize {
    private stack: number[];
    private size = 0;
    private top = 0;

    constructor(size: number) {
        this.stack = new Array(size);
    }

    public getStack = () => this.stack;

    public push = (value: number) => {
        if (this.size === this.stack.length) throw new Error("Stack max size exeeded");

        this.stack[this.top++] = value;
        ++this.size;
    };

    public pop = () => {
        if (this.size === 0) return null;

        --this.size;
        return this.stack[--this.top];
    };
}

const s1 = new StackWithSize(3);

console.log(s1.push(1));
console.log(s1.push(2));
console.log(s1.push(3));
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.push(4));
console.log(s1.push(5));
console.log(s1.pop());
console.log(s1.push(6));
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.getStack());
