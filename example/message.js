const {messageHelper} = require("../helper");
const {toBase64, fromBase64} = require("../helper/string");
const pako = require('pako')
let a = messageHelper.compressMessage(454444)
console.log(messageHelper.unCompressMessage(a))