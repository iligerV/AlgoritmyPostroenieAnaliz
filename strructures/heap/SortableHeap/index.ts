import { AbstractHeap } from "../AbstractHeap";

export class SortableHeap extends AbstractHeap {
    public sort = () => {
        const initHeap = [...this.heap];

        for (let i = this.heap.length - 1; i > 0; i--) {
            let tmp = this.heap[0];
            this.heap[0] = this.heap[i];
            this.heap[i] = tmp;

            --this.heapSize;

            this.maxHeapify(0);
        }

        const tmp = this.heap;
        this.heap = initHeap;
        this.heapSize = initHeap.length;
        return tmp;
    };
}
