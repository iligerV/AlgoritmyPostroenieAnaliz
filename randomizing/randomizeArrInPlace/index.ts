import { getRandomInt } from "../getRandomInt";

const input = [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 67, 99, 111];

export const randomizeArrInPlace = (input: number[]) => {
    for (let i = 0; i < input.length; i++) {
        const tmp = input[i];
        const randomIdx = getRandomInt(i, input.length - 1);
        input[i] = input[randomIdx];
        input[randomIdx] = tmp;
    }

    return input;
};

console.log(randomizeArrInPlace(input));
