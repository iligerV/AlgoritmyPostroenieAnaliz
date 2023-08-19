// Сортировка пузырьковая

type SortType = "ASC" | "DESC";

const input = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 0, 67, 54, 99];

// O(n^2)
export const bubbleSort = (integerCollection: number[], sortType: SortType = "ASC") => {
    for (let i = 0; i < integerCollection.length; i++) {
        for (let k = integerCollection.length - 1; k > i; k--) {
            if (
                sortType === "ASC"
                    ? integerCollection[k] < integerCollection[k - 1]
                    : integerCollection[k] > integerCollection[k - 1]
            ) {
                const tmp = integerCollection[k];
                integerCollection[k] = integerCollection[k - 1];
                integerCollection[k - 1] = tmp;
            }
        }
    }

    return integerCollection;
};

console.log(bubbleSort(input, "ASC"));
