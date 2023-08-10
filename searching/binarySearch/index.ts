// Бинарный поиск

const input = [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 67, 99, 111];

export const binarySearch = (input: number[], value: number) => {
    if(input.length <= 1) return input[0] === value ? value : null;

    const middleIdx = Math.floor(input.length / 2);

    if(input[middleIdx] === value) return value;
    if(input[middleIdx] > value) return binarySearch(input.slice(0, middleIdx), value);
    return binarySearch(input.slice(middleIdx), value);
}

// console.log(binarySearch(input, 0));
