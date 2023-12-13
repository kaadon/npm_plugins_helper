export * as emailHelper from "./email"
export * as mathHelper from "./math"
export * as mobileHelper from "./mobile"
export * as stringHelper from "./string"
export * as moneyHelper from "./money"
export * as timeHelper from "./time"
export * as messageHelper from "./message"
export * as encryptHelper from "./encrypt"
export * as arrayHelper from "./array"
export * as netHelper from "./net"
export class KaadonError extends Error {
    constructor(message, code = 201, type = "ERROR",options = {}) {
        if (typeof message === "object") message = JSON.stringify(message)
        super(message); // 调用父类Error的构造函数
        this.code = parseInt(code);
        this.type = type.toString();
        this.name = 'KaadonError';
        if (JSON.stringify(options) !== '{}'){
            Object.keys(options).forEach((item)=>{
                this[item] = options[item]
            })
        }
    }
}