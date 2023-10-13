export function hideLocation(str, start = 4, num = 4) {
    return str.substring(0, start - 1) + "****" + str.substr(str.length - num);
}

export function replaceAll(text, repstr, newstr) {
    return text.replace(new RegExp(repstr, "gm"), newstr);
}

export function stringTrim(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
}

export function toBase64(str) {
    if (typeof str === "object") str = JSON.stringify(str)
    if (typeof str === "number") str = str.toString()
    return Buffer.from(str).toString("base64")
}

export function fromBase64(str) {
    if (str === "0") return
    if (typeof str === "string") return JSON.parse(Buffer.from(str, 'base64').toString("utf8"))
    throw new Error("数据错误!")
}