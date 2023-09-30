// Быстрая сортировка

type SortType = "ASC" | "DESC";

const input1 = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

// O(n*lgn)
// Worst O(n^2) -> one of subArr always empty (ex: already sorted collection)
export const qiuckSort = (
    input: number[],
    sortType: SortType = "ASC",
    start = 0,
    end = input.length - 1
) => {
    if (start < end) {
        const delimeterIdx = partion(input, start, end, sortType);

        qiuckSort(input, sortType, start, delimeterIdx - 1);
        qiuckSort(input, sortType, delimeterIdx + 1, end);
    }
    return input;
};

const partion = (input: number[], start, end, sortType: SortType) => {
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

console.log(qiuckSort(input1, "DESC"));
