// Быстрая сортировка Ломуто

import { input1, input2, SortType } from "..";

// O(n*lgn)
// Worst O(n^2) -> one of subArr always empty (ex: already sorted collection)
export const lomutoQiuckSort = (
    input: number[],
    sortType: SortType = "ASC",
    start = 0,
    end = input.length - 1
) => {
    if (start < end) {
        const delimeterIdx = lomutoPartion(input, start, end, sortType);

        lomutoQiuckSort(input, sortType, start, delimeterIdx - 1);
        lomutoQiuckSort(input, sortType, delimeterIdx + 1, end);
    }
    return input;
};

export const lomutoPartion = (input: number[], start, end, sortType: SortType) => {
    const lastInt = input[end];
    let pivotIdx = start - 1;

    for (let i = start; i < end; i++) {
        const currentInt = input[i];
        if (sortType === "ASC" ? currentInt <= lastInt : currentInt >= lastInt) {
            ++pivotIdx;

            input[i] = input[pivotIdx];
            input[pivotIdx] = currentInt;
        }
    }

    input[end] = input[pivotIdx + 1];
    input[pivotIdx + 1] = lastInt;

    return pivotIdx + 1;
};

console.log(lomutoQiuckSort(input1, "DESC"));
