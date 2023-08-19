// Поиск максимального подмассива

const input = [13, -3, -25, 20, -3, -26, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7, 10000];

// O(nlogn)
const findMaximumSubarray = (input: number[], low: number = 0, high: number = input.length - 1) => {
    if (high < 0) return null;
    if (low === high) return [low, high, input[low]];
    const mid = Math.floor((low + high) / 2);

    const [leftLow, leftHigh, leftSum] = findMaximumSubarray(input, low, mid);
    const [rightLow, rightHigh, rightSum] = findMaximumSubarray(input, mid + 1, high);
    const [currLow, currHigh, currSum] = findMaxCrossingSubarray(input, low, mid, high);

    if(leftSum >= rightSum && leftSum >= currSum) return [leftLow, leftHigh, leftSum]
    if(rightSum >= leftSum && rightSum >= currSum) return [rightLow, rightHigh, rightSum]
    return [currLow, currHigh, currSum];
};

// O(n)
const findMaxCrossingSubarray = (input: number[], low: number, mid: number, high: number) => {
    let leftSum = 0;
    let leftSumMax = -Infinity;
    let leftMax = -Infinity;

    for (let i = mid; i >= low; i--) {
        leftSum = leftSum + input[i];
        if(leftSumMax < leftSum) {
            leftSumMax = leftSum;
            leftMax = i;
        }
    }

    let rightSum = 0;
    let rightSumMax = -Infinity;
    let rightMax = -Infinity;
    for (let j = mid + 1; j <= high; j++) {
        rightSum = rightSum + input[j];
        if(rightSumMax < rightSum) {
            rightSumMax = rightSum;
            rightMax = j;
        }
    }

    return [leftMax, rightMax, leftSumMax + rightSumMax]
};

console.log(findMaximumSubarray(input));