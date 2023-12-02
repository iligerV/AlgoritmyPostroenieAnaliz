export * from "./singleLinkedList";

export class ListNode {
    value: number;
    next: ListNode | null = null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}
