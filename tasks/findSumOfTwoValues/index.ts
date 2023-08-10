// Разработайте алгоритм со временем работы O(nlgn), который для заданного отсортировнного
// множества S из n целых чисел и другого целого числа x определяет, имеются
// ли в множестве S два элемента, сумма которых равна x.

import { binarySearch } from "../../searching";

const input = [1, 2, 3, 4, 5, 6, 9, 11, 67, 99, 111, 120];

const findSumOfTwoValues = (input: number[], value: number): [number, number] | null => {
    for (let i = 0; i < input.length; i++) {
        const pairForCurrentIdx = binarySearch(input, value - input[i]);
        if (pairForCurrentIdx || pairForCurrentIdx === 0) return [input[i], pairForCurrentIdx];
    }
    return null;
};

console.log(findSumOfTwoValues(input, 231));
