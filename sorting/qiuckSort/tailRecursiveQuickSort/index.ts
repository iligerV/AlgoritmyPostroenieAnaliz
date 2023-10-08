// Быстрая сортировка с оптимизацией глубины стека рекурсии

import { input1, input2, SortType } from "..";
import { lomutoPartion } from "../lomutoQiuckSort";

// O(n*lgn)
// optimaze recursion stack depth
export const tailRecursiveQuickSort = (
    input: number[],
    sortType: SortType = "ASC",
    start = 0,
    end = input.length - 1
) => {
    while (start < end) {
        const delimeterIdx = lomutoPartion(input, start, end, sortType);

        tailRecursiveQuickSort(input, sortType, start, delimeterIdx - 1);
        start = delimeterIdx + 1;
    }
    return input;
};

console.log(tailRecursiveQuickSort(input1, "ASC"));
