// Выбор i-го элемента по возрастанию или убыванию

import { randomizedPartion } from "../../sorting/qiuckSort/randomizedQiuckSort";

const input1 = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

type Order = "ASC" | "DESC";

// O(n) - mathematical expectation
export const randomizedSelect = (
    input: number[],
    i: number,
    order: Order,
    start = 0,
    end = input.length - 1
) => {
    if (i > end) i = end;
    if (start === end) return input[start];

    const pivot = randomizedPartion(input, start, end, order);

    if (pivot === i) return input[pivot];
    else if (pivot > i) return randomizedSelect(input, i, order, start, pivot - 1);
    else return randomizedSelect(input, i, order, pivot + 1, end);
};

console.log(randomizedSelect(input1, 0, "DESC"));
