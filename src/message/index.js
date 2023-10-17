import pako from "pako";
import {fromBase64, toBase64} from "../string";

export function compressMessage(data) {
    if (typeof data === "object") data = JSON.stringify(data);
    if (typeof data === "number") data = data.toString();
    if (typeof data !== "string") throw new Error(`Can't convert ${typeof data} format`)
    return toBase64(pako.gzip(JSON.stringify(data), {to: "string"}))
}

export function unCompressMessage(string) {
    try {
        //逻辑代码
        return JSON.parse(pako.inflate(fromBase64(string),{ to: 'string' }))
    } catch (e) {
        return false;
    }
}
