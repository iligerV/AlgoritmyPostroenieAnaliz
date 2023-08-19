// Сортировка слиянием + вставками
import { merge } from '../mergeAndSort'
import { insertionSort } from '../insertionSort'

type SortType = "ASC" | "DESC";

const input = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

// O(nlg(n/k))
const mergeInsertionSort = (
    integerCollection: number[],
    kGroupLength: number,
    sortType: SortType = "ASC"
) => {
    if (integerCollection.length <= kGroupLength) return insertionSort(integerCollection, sortType);

    const sortedColl1 = mergeInsertionSort(
        integerCollection.slice(0, Math.floor(integerCollection.length / 2)),
        kGroupLength,
        sortType
    );
    const sortedColl2 = mergeInsertionSort(
        integerCollection.slice(Math.floor(integerCollection.length / 2)),
        kGroupLength,
        sortType
    );

    return merge(sortedColl1, sortedColl2, sortType);
};

console.log(mergeInsertionSort(input, 5, "DESC"));
