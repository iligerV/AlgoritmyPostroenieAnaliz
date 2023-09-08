// Поиск максимального подмассива

const input = [13, -3, -25, 20, -3, -26, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7, 10000];

// O(n)
const findMaximumSubarrayLinear = (input: number[]) => {
    if (input.length === 0) return null;
    let maxLow = 0;
    let maxHigh = 0;
    let maxSum = input[0];

    let currMaxLow = 0;
    let currSum = input[0];

    for (let i = 1; i < input.length; i++) {
        currSum = currSum + input[i];
        if (maxSum <= currSum) {
            maxLow = currMaxLow;
            maxHigh = i;
            maxSum = currSum;
        }
        if (currSum < 0) {
            currMaxLow = i + 1;
            currSum = 0;
        }
    }
    return [maxLow, maxHigh, maxSum];
};

console.log(findMaximumSubarrayLinear(input));
