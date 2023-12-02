import { getRandomInt } from "../../../randomizing/getRandomInt";
import { StackAsSingleLinkedList } from "../../stack/stackAsSingleLinkedList";

export class ArrLikeLinkedList {
    private head: number = null;
    private size: number = null;
    private list: number[] = [];
    private freeIdxStack: StackAsSingleLinkedList = null;

    constructor(length: number) {
        this.size = length;
        this.list = new Array(length * 3);

        this.freeIdxStack = this.generateFreeIdxStack(length);
    }

    private generateFreeIdxStack = (length: number) => {
        const idxArr = Array(length)
            .fill(0)
            .map((_v, idx) => idx);
        const stack = new StackAsSingleLinkedList();

        for (let i = 0; i < idxArr.length; i++) {
            const tmp = idxArr[i];
            const randomIdx = getRandomInt(i, idxArr.length - 1);
            idxArr[i] = idxArr[randomIdx];
            idxArr[randomIdx] = tmp;
            stack.push(idxArr[i]);
        }

        return stack;
    };

    public getList = () => this.list;

    public allocateObject = (value: number) => {
        if (this.freeIdxStack.getHead() === null) {
            throw Error("Not enough memory");
        }
        const position = this.freeIdxStack.pop() * 3;

        this.list[position] = null; // prev
        this.list[position + 1] = value; // val
        this.list[position + 2] = this.head; // next

        if (this.head !== null) this.list[this.head] = position;
        this.head = position;
    };

    public freeObject = () => {
        if (this.head === null) throw new Error("List is empty");

        this.freeIdxStack.push(this.head / 3);

        const nextNodeIdx = this.list[this.head + 2];

        this.list[this.head + 1] = null;
        this.list[this.head + 2] = null;

        this.head = nextNodeIdx;

        if (this.head !== null) {
            this.list[this.head] = null;
        }
    };
}

// const test = new ArrLikeLinkedList(5);

// test.allocateObject(1);
// test.allocateObject(2);
// test.allocateObject(3);
// test.allocateObject(4);
// test.allocateObject(5);
// test.freeObject();
// test.allocateObject(6);

// console.log(test.getList());
