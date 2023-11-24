import { BigNumber } from 'bignumber.js';
import fs from "fs";
import crypto from "crypto";

export function MathRound(float, num) {
    return Math.round(float * Math.pow(10, num)) / Math.pow(10, num)
}

// +
export function add(a, b) {
    a = BigNumber(a);
    b = BigNumber(b);
    return a.plus(b).toNumber();   //结果需要用toNumber转为普通数字
}
// -
export function minus(a, b) {
    a = BigNumber(a);
    b = BigNumber(b);
    return a.minus(b).toNumber();
}
// *
export function mut(a, b) {
    a = BigNumber(a);
    b = BigNumber(b);
    return a.multipliedBy(b).toNumber();
}
// /
export function dev(a, b) {
    a = BigNumber(a);
    b = BigNumber(b);
    return a.dividedBy(b).toNumber();
}


export const fileCp = (oldPath,newPath) => {
    try {
        fs.renameSync(oldPath, newPath);
    } catch (err) {
        throw err
    }
}
export const randomIntFromInterval =( min, max) =>  {
    const rangeNumber = max - min;
    if (rangeNumber < 0) {
        throw new Error('最大值必须大于最小值');
    }
    const bytesNeeded = Math.ceil(Math.log2(rangeNumber + 1) / 8);
    const maxValue = Math.pow(256, bytesNeeded);
    let randomNumber;
    do {
        const randomBytes = crypto.randomBytes(bytesNeeded);
        randomNumber = randomBytes.reduce((acc, byte, idx) => acc + byte * Math.pow(256, idx), 0);
    } while (randomNumber >= maxValue - maxValue % (rangeNumber + 1));
    return min + randomNumber % (rangeNumber + 1);
}