// Поразрядная сортировка

type SortType = "ASC" | "DESC";

const input1 = [13, 19, 49, 25, 12, 75, 48, 57, 34, 11, 21, 32, 16, 11, 21, 25];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];
const input3 = [6, 0, 2, 0, 1, 3, 1, 4, 6, 1, 3, 2];
const input4 = [1, 0, 2, 22220, 11511235, 32, 55556, 1, 55556, 1, 32, 2000000];

// O(d(k + n))
const radixSort = (input: number[], sortType: SortType) => {
    if (input.length === 0) return input;

    const maxRadix = Math.max(...input).toString().length;
    let output = input;

    for (let i = 0; i < maxRadix; i++) {
        output = countingSortByRadix(output, i, sortType);
    }

    return output;
};

const countingSortByRadix = (input: number[], radix: number, sortType: SortType) => {
    let maxInputValue = 0;
    for (let value of input) {
        maxInputValue = Math.max(maxInputValue, getIntRadix(value, radix));
    }

    const countValueFrequency = new Array(maxInputValue + 1).fill(0);
    for (let i = 0; i < input.length; i++) {
        ++countValueFrequency[getIntRadix(input[i], radix)];
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
        output[countValueFrequency[getIntRadix(input[i], radix)] - 1] = input[i];
        countValueFrequency[getIntRadix(input[i], radix)] -= 1;
    }
    return output;
};

const getIntRadix = (value: number, radix: number) =>
    Number(value.toString()[value.toString().length - radix - 1] || 0);

console.log(radixSort([...input1, ...input2, ...input3, ...input4], "DESC"));
