// Сортировка слиянием

type SortType = "ASC" | "DESC";

const input = [11, 1, 2, 3, 4, 5, 6, 8, 7, 9, 67, 54, 99, 0];

// O(nlgn)
export const merge = (coll1: number[], coll2: number[], sortType: SortType = "ASC"): number[] => {
    const finalRes = [];

    let c1Idx = 0;
    let c2Idx = 0;

    while (c1Idx < coll1.length || c2Idx < coll2.length) {
        if (
            sortType === "ASC"
                ? (coll1[c1Idx] ?? Infinity) < (coll2[c2Idx] ?? Infinity)
                : (coll1[c1Idx] ?? -Infinity) > (coll2[c2Idx] ?? -Infinity)
        ) {
            finalRes.push(coll1[c1Idx]);
            ++c1Idx;
        } else {
            finalRes.push(coll2[c2Idx]);
            ++c2Idx;
        }
    }

    return finalRes;
};

export const mergeAndSort = (integerCollection: number[], sortType: SortType = "ASC"): number[] => {
    if (integerCollection.length <= 1) return integerCollection;

    const sortedColl1 = mergeAndSort(
        integerCollection.slice(0, Math.floor(integerCollection.length / 2)),
        sortType
    );
    const sortedColl2 = mergeAndSort(
        integerCollection.slice(Math.floor(integerCollection.length / 2)),
        sortType
    );

    return merge(sortedColl1, sortedColl2, sortType);
};

// console.log(mergeAndSort(input, "ASC"));
