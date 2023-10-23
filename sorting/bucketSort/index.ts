// карманная сортировка

import { insertionSort } from "../insertionSort";

type SortType = "ASC" | "DESC";

const input1 = [
    0.13, 0.19, 0.49, 0.25, 0.12, 0.75, 0.48, 0.57, 0.34, 0.11, 0.21, 0.32, 0.16, 0.11, 0.21, 0.25,
];
const input2 = [0.11, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 0.7, 0.9, 0.67, 0.54, 0.99, 0.0];
const input3 = [0.6, 0.0, 0.2, 0.0, 0.1, 0.3, 0.1, 0.4, 0.6, 0.1, 0.3, 0.2];
const input4 = [0.1, 0.0, 0.2, 0.2222, 0.11511235, 0.32, 0.55556, 0.1, 0.55556, 0.1, 0.32, 0.2];

// O(n) as mathematical expectation
// O(n^2) worst
const bucketSort = (input: number[], sortType: SortType) => {
    const inputLength = input.length;
    const buckets = new Array(inputLength + 1).fill(null).map(() => new Array());

    for (let i = 0; i < inputLength; i++) {
        buckets[Math.floor(inputLength * input[i])].push(input[i]);
    }

    for (let i = 0; i < inputLength; i++) {
        insertionSort(buckets[i], sortType);
    }

    return sortType === "ASC" ? buckets.flat() : buckets.flat().reverse();
};

console.log(bucketSort([...input1, ...input2, ...input3, ...input4], "ASC"));
