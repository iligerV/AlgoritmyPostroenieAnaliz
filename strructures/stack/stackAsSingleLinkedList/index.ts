import { ListNode, SingleLinkedList } from "../../linkedList";

export class StackAsSingleLinkedList extends SingleLinkedList {
    constructor(initStack: ListNode = null) {
        super(initStack);
    }

    public push = (value: number) => {
        this.insert(value);
        return true;
    };

    public pop = () => {
        if (this.head) {
            const val = this.head;
            this.delete(val.value);
            return val.value;
        } else null;
    };
}

// const s1 = new StackAsSingleLinkedList();

// console.log(s1.push(1));
// console.log(s1.push(2));
// console.log(s1.push(3));
// console.log(s1.pop());
// console.log(s1.pop());
// console.log(s1.push(4));
// console.log(s1.push(5));
// console.log(s1.pop());
// console.log(s1.push(6));
// console.log(s1.pop());
// console.log(s1.pop());
// console.log(s1.pop());
// console.log(s1.getHead());
