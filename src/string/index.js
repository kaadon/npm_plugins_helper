export function hideLocation(str, start = 4, num = 4) {
    return str.substring(0, start - 1) + "****" + str.substr(str.length - num);
}

export function replaceAll(text, repstr, newstr) {
    return text.replace(new RegExp(repstr, "gm"), newstr);
}

export function stringTrim(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
}