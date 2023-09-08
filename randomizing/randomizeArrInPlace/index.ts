// Бинарный поиск

const input = [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 67, 99, 111];

export const randomizeArrInPlace = (input: number[]) => {
    for (let i = 0; i < input.length; i++) {
        const tmp = input[i];
        const randomIdx = Math.floor(Math.random() * (input.length - i) + i);
        input[i] = input[randomIdx];
        input[randomIdx] = tmp;
    }

    return input;
};

console.log(randomizeArrInPlace(input));
