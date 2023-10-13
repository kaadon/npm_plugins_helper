import { BigNumber } from 'bignumber.js';

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
