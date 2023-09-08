const matrix = [
    [10, 17, 13, 28, 23],
    [17, 22, 16, 29, 23],
    [24, 28, 22, 34, 24],
    [11, 13, 6, 17, 7],
    [45, 44, 32, 37, 23],
];

type ROW_TYPE = "ODD" | "EVEN";

const divideAndConquer = (row: number[]) => {
    if (row.length === 1) return row[0];

    const leftMinValue = divideAndConquer(row.slice(0, Math.floor(row.length / 2)));
    const rightMinValue = divideAndConquer(row.slice(Math.floor(row.length / 2)));

    return Math.min(leftMinValue, rightMinValue);
};

const findMinValueInEachMatrixRow = (matrix: number[][], rowType: ROW_TYPE) => {
    const matrixMap = new Map();

    for (let i = rowType === "ODD" ? 0 : 1; i < matrix.length; i += 2) {
        matrixMap.set(divideAndConquer(matrix[i]), matrix[i]);
    }
    return matrixMap;
};

console.log(findMinValueInEachMatrixRow(matrix, "ODD"));
