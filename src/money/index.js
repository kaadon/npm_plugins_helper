export function moneyFormat(money, number = 3) {
    let monyData = parseFloat(money).toString().split('.');
    if (monyData[1] && parseFloat(money).toString().split('.')[1].length > number) {
        return parseFloat(parseFloat(money).toFixed(number))
    }
    return parseFloat(money)
}