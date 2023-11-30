export const randomArrayOne = array => {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
};
export const getRandomArrayItems = (array, count) => {
    if (array.length <= count) return array;
    var shuffled = array.slice(0),
        i = array.length,
        min = i - count,
        temp,
        index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};