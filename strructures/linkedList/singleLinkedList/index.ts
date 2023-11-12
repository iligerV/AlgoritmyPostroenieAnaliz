import { ListNode } from "..";

export class SingleLinkedList {
    head: ListNode = null;

    constructor(initList: ListNode = null) {
        this.head = initList;
    }

    public getList = () => this.head;

    public search = (value: number): ListNode | null => {
        let currentHead = this.head;

        while (currentHead && currentHead.value !== value) {
            currentHead = currentHead.next;
        }

        return currentHead;
    };

    public insert = (value: number) => {
        const listNode = new ListNode(value);
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

        return true;
    };
}

// const list = new SingleLinkedList();
// console.log(list.insert(1));
// console.log(list.insert(2));
// console.log(list.insert(3));
// console.log(list.getList());
// console.log(list.search(2));
// console.log(list.delete(2));
// console.log(list.search(2));
// console.log(list.getList());
// console.log(list.delete(3));
// console.log(list.getList());
// console.log(list.delete(1));
// console.log(list.getList());
// console.log(list.insert(10));
// console.log(list.getList());
