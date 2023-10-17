import * as __defaultKey from "./defaultKey";
import jsonwebtoken from "jsonwebtoken";

import {JSXElement} from "@babel/generator/lib/generators/jsx";


class Jwt {
    PublicKey = __defaultKey.PublicKey
    PrivateKey = __defaultKey.PrivateKey
    static instance

    static getInstance() {
        if (!Jwt.instance) {
            Jwt.instance = new Jwt()
        }
        return Jwt.instance
    }

    constructor(key = {}) {
        if (key?.publicKey) this.setPublicKey(key.publicKey)
        if (key?.privateKey) this.setPrivateKey(key.privateKey)
    }

    setPublicKey(publicKey) {
        this.PublicKey = publicKey
        return this
    }

    setPrivateKey(privateKey) {
        this.PrivateKey = privateKey
        return this
    }

    generateToken(data, expire = 86400, issuer = "booladmin", algorithm = "RS512") {
        try {
            //逻辑代码
            return jsonwebtoken.sign(data, this.PrivateKey,
                {
                    algorithm: algorithm, // 加密算法   对称加密算法
                    issuer: issuer, // 签发人
                    expiresIn: expire // 过期时间   单位：s
                }
            );
        } catch (e) {
            throw new Error(e.message)
        }
    }

    /**
     * 签名验证
     * @param {string} token
     */
    verifyToken(token, issuer = "booladmin", algorithms = ["RS512"]) {
        try {
            return jsonwebtoken.verify(token, this.PublicKey, {
                issuer    : issuer,
                algorithms: algorithms,
            });
        } catch (error) {
            throw new Error(error)
        }
    }


}

export default Jwt.getInstance