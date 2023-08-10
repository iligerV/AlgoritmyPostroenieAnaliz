// Сортировка выбором

type SortType = "ASC" | "DESC";

const input = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

const selectionSort = (integerCollection: number[], sortType: SortType = "ASC") => {
    for (let i = 0; i < integerCollection.length; i++) {
        let currentInt = integerCollection[i];
        let currentIntIdx = i;

        for (let k = i; k < integerCollection.length; k++) {
            if (
                sortType === "ASC"
                    ? currentInt > integerCollection[k]
                    : currentInt < integerCollection[k]
            ) {
                currentInt = integerCollection[k];
                currentIntIdx = k;
            }
        }

        integerCollection[currentIntIdx] = integerCollection[i];
        integerCollection[i] = currentInt;
    }

    return integerCollection;
};

console.log(selectionSort(input, "DESC"));
