// Быстрая сортировка с рандомизацией

import { getRandomInt } from "../../../randomizing/getRandomInt";
import { SortType } from "..";

const input1 = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

// O(n*lgn)
// decrease worst case O(n^2) occurrence by selecting random lastInt in Lomuto partion
export const randomizedQiuckSort = (
    input: number[],
    sortType: SortType = "ASC",
    start = 0,
    end = input.length - 1
) => {
    if (start < end) {
        const delimeterIdx = randomizedPartion(input, start, end, sortType);

        randomizedQiuckSort(input, sortType, start, delimeterIdx - 1);
        randomizedQiuckSort(input, sortType, delimeterIdx + 1, end);
    }
    return input;
};

const randomizedPartion = (input: number[], start, end, sortType: SortType) => {
    rearrangeLastIntWithRandomIdx(input, start, end);

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

const rearrangeLastIntWithRandomIdx = (input: number[], start, end) => {
    const randomIdx = getRandomInt(start, end);
    const tmp = input[end];
    input[end] = input[randomIdx];
    input[randomIdx] = tmp;
};

console.log(randomizedQiuckSort(input2, "DESC"));
