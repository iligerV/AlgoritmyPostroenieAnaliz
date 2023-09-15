export class AbstractHeap {
    protected heap: number[] = [];
    protected heapSize: number = 0;

    constructor(numsList: number[]) {
        this.heap = numsList;
        this.heapSize = numsList.length;
        this.buildMaxHeap();
    }

    public getHeap = (): number[] => this.heap;

    public buildMaxHeap = (): number[] => {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
        return this.heap;
    };

    protected getParent = (numIdx: number): number => {
        return Math.floor((numIdx + 1) / 2) - 1;
    };

    protected getLeft = (numIdx: number): number => {
        return numIdx * 2 + 1;
    };

    protected getRight = (numIdx: number): number => {
        return numIdx * 2 + 2;
    };

    protected maxHeapify = (numIdx: number): void => {
        let largestIdx = numIdx;

        const leftNumIdx = this.getLeft(numIdx);
        const rightNumIdx = this.getRight(numIdx);

        if (leftNumIdx <= this.heapSize - 1 && this.heap[leftNumIdx] > this.heap[numIdx]) {
            largestIdx = leftNumIdx;
        }
        if (rightNumIdx <= this.heapSize - 1 && this.heap[rightNumIdx] > this.heap[largestIdx]) {
            largestIdx = rightNumIdx;
        }
        if (largestIdx !== numIdx) {
            let tmp = this.heap[numIdx];
            this.heap[numIdx] = this.heap[largestIdx];
            this.heap[largestIdx] = tmp;
            this.maxHeapify(largestIdx);
        }
    };
}
