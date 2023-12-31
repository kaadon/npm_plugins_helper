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

export function fromBase64(str)  {
    if (str === "0") return str;
    if (typeof str !== "string") {
        throw new Error("输入必须是字符串类型");
    }
    try {
        str = Buffer.from(str, 'base64').toString("utf8");
    } catch (e) {
        return str
    }
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}


export function toJSON(variable) {
    // 检查变量是否为字符串类型
    if (typeof variable !== 'string') {
        // 变量不是字符串类型，不可能是JSON
        return false;
    }
    // 尝试解析字符串为JSON对象
    try {
        var json = JSON.parse(variable);
    } catch (error) {
        // 解析失败，变量不是JSON
        return false;
    }
    // 检查解析结果是否为对象类型
    if (typeof json !== 'object') {
        // 解析结果不是对象类型，不是JSON
        return false;
    }
    // 变量是JSON
    return json;
}


export function padString(strings, key) {
    const maxLength = 20;
    strings = [...strings];
    let start = strings.splice(0, 1)[0].trim();
    return ` ${start.padEnd(maxLength)}${key}${strings.pop() || ""}`;
}