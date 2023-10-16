// Сортировка подсчетом

type SortType = "ASC" | "DESC";

const input1 = [13, 19, 9, 5, 12, 5, 8, 7, 4, 11, 21, 2, 6, 11, 21, 5];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];
const input3 = [6, 0, 2, 0, 1, 3, 1, 4, 6, 1, 3, 2];

// O(k + n)
// if k === n -> O(n) - ex: [5,4,3,4,2] k(maxValue) = 5 & length = 5
const countingSort = (input: number[], sortType: SortType) => {
    if (input.length === 0) return [];

    const maxInputValue = Math.max(...input);

    const countValueFrequency = new Array(maxInputValue + 1).fill(0);
    for (let i = 0; i < input.length; i++) {
        ++countValueFrequency[input[i]];
    }

    if (sortType === "ASC") {
        for (let i = 1; i < countValueFrequency.length; i++) {
            countValueFrequency[i] = countValueFrequency[i] + countValueFrequency[i - 1];
        }
    } else {
        for (let i = countValueFrequency.length - 2; i >= 0; i--) {
            countValueFrequency[i] = countValueFrequency[i] + countValueFrequency[i + 1];
        }
    }

    const output = new Array(input.length);
    for (let i = input.length - 1; i >= 0; i--) {
        output[countValueFrequency[input[i]] - 1] = input[i];
        countValueFrequency[input[i]] -= 1;
    }
    return output;
};

console.log(countingSort(input1, "ASC"));
