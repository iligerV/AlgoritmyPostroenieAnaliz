// Быстрая сортировка с разделением Хоара

type SortType = "ASC" | "DESC";

const input1 = [13, 19, 9, 5, 12, 8, 7, 4, 11, 2, 6, 21];
const input2 = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

// O(n*lgn)
export const hoareQuickSort = (
    input: number[],
    sortType: SortType = "ASC",
    start = 0,
    end = input.length - 1
) => {
    if (start < end) {
        const delimeterIdx = hoarePartition(input, start, end, sortType);

        hoareQuickSort(input, sortType, start, delimeterIdx - 1);
        hoareQuickSort(input, sortType, delimeterIdx + 1, end);
    }
    return input;
};

const hoarePartition = (arr: number[], l: number, h: number, sortType: SortType = "ASC") => {
    const pivot = arr[l];

    let i = l - 1,
        j = h + 1;

    while (true) {
        do {
            i++;
        } while (sortType === "ASC" ? arr[i] < pivot : arr[i] > pivot);

        do {
            j--;
        } while (sortType === "ASC" ? arr[j] > pivot : arr[j] < pivot);

        if (i >= j) {
            return j;
        } else {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
};
console.log(hoareQuickSort(input1, "ASC"));
