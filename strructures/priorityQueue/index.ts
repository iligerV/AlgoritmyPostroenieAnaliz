import { SortableHeap } from "../heap";

class PriorityQueue extends SortableHeap {
    public insert = (value: number): number[] | null => {
        ++this.heapSize;
        this.heap[this.heapSize - 1] = -Infinity;
        return this.increaseKey(this.heapSize - 1, value);
    };

    public delete = (numIdx: number) => {
        this.heap[numIdx] = this.heap[this.heapSize - 1];
        this.heap[this.heapSize - 1] = -Infinity;
        --this.heapSize;
        this.heap.pop();
        this.maxHeapify(numIdx);
        return this.heap;
    };

    public getMaximum = () => {
        return this.heap[0];
    };

    public extractMax = () => {
        if (this.heapSize <= 0) {
            return null;
        }
        const max = this.getMaximum();
        this.heap[0] = this.heap[this.heapSize - 1];
        this.heap.pop();
        --this.heapSize;
        this.maxHeapify(0);
        return max;
    };

    public increaseKey = (numIdx: number, value: number): number[] | null => {
        if (this.heap[numIdx] >= value) {
            return null;
        }
        this.heap[numIdx] = value;
        while (numIdx > 0 && this.heap[this.getParent(numIdx)] < this.heap[numIdx]) {
            const tmp = this.heap[this.getParent(numIdx)];
            this.heap[this.getParent(numIdx)] = this.heap[numIdx];
            this.heap[numIdx] = tmp;
            numIdx = this.getParent(numIdx);
        }
        return this.heap;
    };
}

// 16, 14, 10, 8, 7, 9, 3, 2, 4, 1
const heap = new PriorityQueue([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);

console.log("sort", heap.sort());
console.log("getHeap", heap.getHeap());
console.log("increaseKey", heap.increaseKey(8, 15));
console.log("insert", heap.insert(22));
console.log("insert", heap.insert(0));
console.log("insert", heap.insert(13));
console.log("insert", heap.insert(4));
console.log("delete 6", heap.delete(6));
console.log("delete 0", heap.delete(0));
console.log("delete 4", heap.delete(4));
console.log("extractMax", heap.extractMax());
console.log("getHeap", heap.getHeap());
