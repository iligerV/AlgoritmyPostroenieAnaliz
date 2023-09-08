// Поиск максимального подмассива

const input = [13, -3, -25, 20, -3, -26, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7, 10000];

// O(n^2)
const findMaximumSubarrayBrute = (input: number[]) => {
    if (input.length === 0) return null;
    let maxLow = 0;
    let maxHigh = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < input.length; i++) {
        let currMaxHigh = i;
        let currMaxSum = input[i];
        let currSum = input[i];
        for (let k = i + 1; k < input.length; k++) {
            currSum = currSum + input[k];
            if (currMaxSum < currSum) {
                currMaxSum = currSum;
                currMaxHigh = k;
            }
        }

        if (maxSum < currMaxSum) {
            maxSum = currMaxSum;
            maxLow = i;
            maxHigh = currMaxHigh;
        }
    }
    return [maxLow, maxHigh, maxSum];
};

console.log(findMaximumSubarrayBrute(input));
