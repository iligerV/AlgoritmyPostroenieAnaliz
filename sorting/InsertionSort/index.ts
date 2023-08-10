// Сортировка вставкой

type SortType = "ASC" | "DESC";

const input = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 0, 67, 54, 99];

const insertionSort = (integerCollection: number[], sortType: SortType = "ASC") => {
    for (let i = 1; i < integerCollection.length; i++) {
        let k = i;
        const currentInt = integerCollection[i];
        let prevInt = integerCollection[k - 1];

        while (k > 0 && (sortType === "ASC" ? prevInt > currentInt : prevInt < currentInt)) {
            integerCollection[k] = prevInt;
            --k;
            prevInt = integerCollection[k - 1];
        }
        integerCollection[k] = currentInt;
    }

    return integerCollection;
};

console.log(insertionSort(input, "DESC"));