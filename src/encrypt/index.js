export {default as JwtInstance} from "./jwt/Jwt"
import crypto from "crypto"
export function MD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}
export function SHA1(input) {
    return crypto.createHash('sha1').update(input).digest('hex');
}