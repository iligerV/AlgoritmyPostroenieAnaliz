import { ListNode } from "..";

export class SingleLinkedList {
    protected head: ListNode = null;
    protected tail: ListNode = null;

    constructor(initList: ListNode = null) {
        this.head = initList;

        let head = initList;
        while (head && head.next) head = head.next;
        this.tail = head;
    }

    public getHead = () => this.head;
    public getTail = () => this.tail;

    public search = (value: number): ListNode | null => {
        let currentHead = this.head;

        while (currentHead && currentHead.value !== value) {
            currentHead = currentHead.next;
        }

        return currentHead;
    };

    public insert = (value: number) => {
        const listNode = new ListNode(value);
        if (!this.tail) this.tail = this.head;
        listNode.next = this.head;
        this.head = listNode;
        return true;
    };

    public delete = (value: number): boolean => {
        let currentHead = this.head;
        let prevHead = null;

        while (currentHead && currentHead.value !== value) {
            prevHead = currentHead;
            currentHead = currentHead.next;
        }

        if (currentHead === null) return false;

        if (prevHead) prevHead.next = currentHead.next;
        else this.head = currentHead.next;

        if (!this.head) this.tail = null;

        return true;
    };

    public static union = (l1: SingleLinkedList, l2: SingleLinkedList): SingleLinkedList => {
        if (l1.getHead() && l2.getHead()) {
            l1.getTail().next = l2.getHead();
            l1.tail = l2.getTail();
            return l1;
        }

        return l1 || l2 || null;
    };

    public static reverse = (l1: SingleLinkedList): SingleLinkedList => {
        let rH = l1.getHead() ? new ListNode(l1.getHead().value) : null;
        let rHTail = rH;
        let head = l1.getHead()?.next || null;

        while (head) {
            const nextTail = new ListNode(head.value);
            rHTail.next = nextTail;
            rHTail = nextTail;
            head = head.next;
        }

        return new SingleLinkedList(rH);
    };
}

// const list = new SingleLinkedList();
// console.log(list.insert(1));
// console.log(list.insert(2));
// console.log(list.insert(3));
// console.log(list.getHead());
// console.log(list.search(2));
// console.log(list.delete(2));
// console.log(list.search(2));
// console.log(list.getHead());
// console.log(list.delete(3));
// console.log(list.getHead());
// console.log(list.delete(1));
// console.log(list.getHead());
// console.log(list.insert(10));
// console.log(list.insert(11));
// console.log(list.insert(12));
// console.log(list.insert(13));
// console.log(list.getHead());
// console.log(list.getTail());

// const list2 = new SingleLinkedList();
// console.log(list2.insert(100));
// console.log(list2.insert(110));
// console.log(list2.insert(120));
// console.log(list2.insert(130));
// console.log(list2.getHead());
// console.log(list2.getTail());

// const list3 = SingleLinkedList.union(list, list2);

// console.log("l3_head", list3.getHead());
// console.log("l3_tail", list3.getTail());

// const list = new SingleLinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// list.insert(5);
// list.insert(6);
// console.log(SingleLinkedList.reverse(list).getHead());
