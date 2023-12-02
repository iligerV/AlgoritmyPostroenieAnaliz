import { ListNode, SingleLinkedList } from "../../linkedList";

class QueueAsSingleLinkedList extends SingleLinkedList {
    public enqueue = (value: number) => {
        const node = new ListNode(value);
        if (!this.head) this.head = node;
        if (this.tail) this.tail.next = node;
        this.tail = node;
        return true;
    };

    public dequeue = () => {
        if (this.head) {
            const val = this.head;
            this.delete(val.value);
            if (!this.head) this.tail = null;
            return val.value;
        } else null;
    };
}

const q1 = new QueueAsSingleLinkedList();

console.log(q1.enqueue(1));
console.log(q1.enqueue(2));
console.log(q1.enqueue(3));
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.enqueue(4));
console.log(q1.enqueue(5));
console.log(q1.dequeue());
console.log(q1.enqueue(6));
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.getHead());
